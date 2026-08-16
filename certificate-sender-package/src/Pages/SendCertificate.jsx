import { motion } from "framer-motion";
import { Award } from "lucide-react";
import PageShell from "../Components/Layout/PageShell";
import CertificateUploader from "../Components/CertificateUploader";

export default function SendCertificate() {
  return (
    <PageShell
      centered
      eyebrow="FMTU 41 · CERTIFICATE SENDER"
      contentClassName="w-full items-center justify-center"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 w-full text-center sm:mb-10"
        >
          <div className="mb-3 flex justify-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#B59410]/40 bg-[#B59410]/10 text-[#B59410]">
              <Award className="h-5 w-5" strokeWidth={1.75} />
            </div>
          </div>

          <h1
            className="text-balance text-2xl font-bold text-white sm:text-3xl md:text-4xl"
            style={{
              fontFamily: '"Cairo", sans-serif',
              textShadow: "0 2px 40px rgba(0,0,0,0.35)",
            }}
          >
            Send <span className="text-[#B59410]">Certificates</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
            Upload an Excel list, personalize each attendance certificate, and email them one by one.
          </p>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.55 }}
            className="mx-auto mt-5 h-[2px] w-24 origin-center rounded-full bg-gradient-to-l from-transparent via-[#B59410] to-transparent sm:w-32"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-4xl"
        >
          <CertificateUploader />
        </motion.div>
      </div>
    </PageShell>
  );
}
