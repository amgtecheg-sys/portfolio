import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  FileSpreadsheet,
  Loader2,
  Mail,
  Send,
  Upload,
  XCircle,
} from "lucide-react";

const STATUS_IDLE = "Idle";

const EMAIL_SUBJECT = "Certificate of Attendance — FMTU 41";

const EMAIL_MESSAGE = `Dear Dr.
Thank you for your valuable participation in the 41st Annual Conference of Tanta University Faculty of Medicine (Updated Medical Guidelines).

Please find attached your certificate of attendance.

Should you have any questions or require any adjustments to the certificate details, please feel free to reply to this email.

We look forward to welcoming you to our future events.`;

function formatDuration(ms) {
  if (ms == null || Number.isNaN(ms)) return "—";
  const totalSeconds = Math.max(0, Math.round(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (minutes === 0) return `${seconds}s`;
  return `${minutes}m ${seconds}s`;
}

async function readNdjsonStream(response, onEvent) {
  if (!response.body) {
    throw new Error("Streaming response is not supported in this browser");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      onEvent(JSON.parse(trimmed));
    }
  }

  const leftover = buffer.trim();
  if (leftover) {
    onEvent(JSON.parse(leftover));
  }
}

export default function CertificateUploader() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(STATUS_IDLE);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [liveStudent, setLiveStudent] = useState(null);
  const [error, setError] = useState("");
  const [report, setReport] = useState(null);
  const [startedAt, setStartedAt] = useState(null);
  const [elapsedMs, setElapsedMs] = useState(null);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    if (!sending) return undefined;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [sending]);

  const progressPercent = useMemo(() => {
    if (!progress.total) {
      if (sending) return 8;
      return 0;
    }
    return Math.min(100, Math.round((progress.current / progress.total) * 100));
  }, [progress, sending]);

  const stats = useMemo(() => {
    const total = report?.total ?? progress.total ?? 0;
    const success = report?.success ?? 0;
    const failed = report?.failed ?? 0;
    const processingTime = report?.processingTimeMs ?? elapsedMs;

    return [
      { label: "Total Students", value: total, icon: FileSpreadsheet },
      { label: "Successfully Sent", value: success, icon: CheckCircle2 },
      { label: "Failed", value: failed, icon: XCircle },
      { label: "Processing Time", value: formatDuration(processingTime), icon: Clock3 },
    ];
  }, [report, progress.total, elapsedMs]);

  function resetResults() {
    setError("");
    setReport(null);
    setLiveStudent(null);
    setProgress({ current: 0, total: 0 });
    setElapsedMs(null);
    setStatus(STATUS_IDLE);
  }

  function onFileChange(event) {
    const next = event.target.files?.[0] ?? null;
    setFile(next);
    resetResults();
  }

  async function handleSend(event) {
    event.preventDefault();
    setError("");
    setReport(null);

    if (!file) {
      setError("Please upload an Excel (.xlsx) file.");
      return;
    }

    const formData = new FormData();
    formData.append("excel", file);

    const start = Date.now();
    setStartedAt(start);
    setSending(true);
    setStatus("Reading Excel...");
    setProgress({ current: 0, total: 0 });
    setLiveStudent(null);

    try {
      const response = await fetch("/api/send-certificates", {
        method: "POST",
        body: formData,
      });

      if (!response.ok && !response.body) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || `Request failed (${response.status})`);
      }

      let finalReport = null;

      await readNdjsonStream(response, (event) => {
        if (event.type === "error") {
          throw new Error(event.message || "Certificate sending failed");
        }

        if (event.type === "status" || event.type === "progress" || event.type === "item_error") {
          setStatus(event.message || STATUS_IDLE);
        }

        if (event.type === "progress" || event.type === "item_error") {
          setProgress({
            current: event.current ?? 0,
            total: event.total ?? 0,
          });
          setLiveStudent({
            name: event.studentName,
            email: event.studentEmail,
          });
        }

        if (event.type === "done") {
          setStatus(event.message || "Completed.");
          finalReport = event.report;
          setReport(event.report);
          setProgress({
            current: event.report?.total ?? 0,
            total: event.report?.total ?? 0,
          });
        }
      });

      if (!finalReport) {
        throw new Error("No final report received from the server");
      }
    } catch (err) {
      setError(err.message || "Something went wrong while sending certificates");
      setStatus("Failed");
    } finally {
      setElapsedMs(Date.now() - start);
      setSending(false);
      setStartedAt(null);
    }
  }

  return (
    <div className="mx-auto w-full max-w-4xl" dir="ltr">
      <form onSubmit={handleSend} className="mx-auto w-full space-y-6">
        <div
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm sm:p-6"
        >
          <label className="mb-3 block text-sm font-semibold text-[#e8c33a]">
            1. Upload Excel (.xlsx)
          </label>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={sending}
            className="group flex w-full flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-[#B59410]/35 bg-[#001a38]/40 px-4 py-10 transition-colors duration-300 hover:border-[#B59410]/70 hover:bg-[#001a38]/65 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#B59410]/40 bg-[#B59410]/10 text-[#B59410] transition-transform duration-300 group-hover:scale-105">
              <Upload className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-white">
                {file ? file.name : "Click to choose an Excel file"}
              </p>
              <p className="mt-1 text-xs text-white/45">
                No header · Column A: Name · Column B: Email
              </p>
            </div>
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept=".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            className="hidden"
            onChange={onFileChange}
            disabled={sending}
          />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm sm:p-6">
          <label className="mb-3 block text-sm font-semibold text-[#e8c33a]">
            2. Email Subject
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#B59410]/70" />
            <div className="w-full rounded-xl border border-white/10 bg-[#00101f]/50 py-3 pl-10 pr-4 text-sm text-white/80">
              {EMAIL_SUBJECT}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm sm:p-6">
          <label className="mb-3 block text-sm font-semibold text-[#e8c33a]">
            3. Email Message
          </label>
          <div className="w-full whitespace-pre-wrap rounded-xl border border-white/10 bg-[#00101f]/50 px-4 py-3 text-sm leading-relaxed text-white/80">
            {EMAIL_MESSAGE}
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={sending}
          whileHover={sending ? undefined : { y: -2 }}
          whileTap={sending ? undefined : { scale: 0.98 }}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#B59410]/50 bg-[#B59410]/15 px-5 py-3.5 text-sm font-bold tracking-wide text-[#e8c33a] transition-colors duration-300 hover:bg-[#B59410]/25 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending Certificates...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Certificates
            </>
          )}
        </motion.button>
      </form>

      <AnimatePresence>
        {(sending || report || error) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="mt-8 space-y-5"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm sm:p-6">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-[#e8c33a]">5. Progress Bar</h3>
                <span className="text-xs font-semibold text-white/50">{progressPercent}%</span>
              </div>

              <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#8a6f0c] via-[#B59410] to-[#e8c33a]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>

              <div className="mt-5">
                <h3 className="mb-2 text-sm font-semibold text-[#e8c33a]">6. Live Status</h3>
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#00101f]/45 px-4 py-3">
                  {sending ? (
                    <Loader2 className="mt-0.5 h-4 w-4 shrink-0 animate-spin text-[#B59410]" />
                  ) : report ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  ) : (
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                  )}
                  <div>
                    <p className="text-sm font-semibold text-white">{status}</p>
                    {liveStudent && (
                      <p className="mt-1 text-xs text-white/50">
                        {liveStudent.name} · {liveStudent.email}
                        {progress.total > 0
                          ? ` · ${progress.current}/${progress.total}`
                          : ""}
                      </p>
                    )}
                    {startedAt && sending && (
                      <p className="mt-1 text-xs text-white/35">
                        Elapsed {formatDuration(now - startedAt)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {error && (
              <div className="rounded-2xl border border-red-400/30 bg-red-500/10 px-5 py-4 text-sm text-red-200">
                {error}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur-sm"
                >
                  <div className="mb-2 flex items-center gap-2 text-[#B59410]">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <p className="text-xl font-bold text-white">{value}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-white/45">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {report && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm sm:p-6">
                <h3 className="mb-4 text-sm font-semibold text-[#e8c33a]">7. Final Report</h3>

                <div className="mb-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                  <div className="rounded-xl border border-white/10 bg-[#00101f]/40 px-3 py-3">
                    <p className="text-white/45">Total</p>
                    <p className="mt-1 text-lg font-bold text-white">{report.total}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#00101f]/40 px-3 py-3">
                    <p className="text-white/45">Success</p>
                    <p className="mt-1 text-lg font-bold text-emerald-400">{report.success}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#00101f]/40 px-3 py-3">
                    <p className="text-white/45">Failed</p>
                    <p className="mt-1 text-lg font-bold text-red-300">{report.failed}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#00101f]/40 px-3 py-3">
                    <p className="text-white/45">Time</p>
                    <p className="mt-1 text-lg font-bold text-white">
                      {formatDuration(report.processingTimeMs)}
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-white/10">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-[#00101f]/70 text-xs uppercase tracking-wide text-[#B59410]">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Metric</th>
                        <th className="px-4 py-3 font-semibold">Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-white/80">
                      <tr>
                        <td className="px-4 py-3">Total</td>
                        <td className="px-4 py-3 font-semibold text-white">{report.total}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Successfully Sent</td>
                        <td className="px-4 py-3 font-semibold text-emerald-400">{report.success}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Failed</td>
                        <td className="px-4 py-3 font-semibold text-red-300">{report.failed}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Processing Time</td>
                        <td className="px-4 py-3 font-semibold text-white">
                          {formatDuration(report.processingTimeMs)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {report.failedEmails?.length > 0 && (
                  <div className="mt-5 overflow-x-auto rounded-xl border border-red-400/20">
                    <table className="min-w-full text-left text-sm">
                      <thead className="bg-red-500/10 text-xs uppercase tracking-wide text-red-200">
                        <tr>
                          <th className="px-4 py-3 font-semibold">#</th>
                          <th className="px-4 py-3 font-semibold">Failed Email</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-white/80">
                        {report.failedEmails.map((email, index) => (
                          <tr key={`${email}-${index}`}>
                            <td className="px-4 py-3 text-white/45">{index + 1}</td>
                            <td className="px-4 py-3">{email}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
