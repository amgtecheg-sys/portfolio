import React from "react";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  const status = isRouteErrorResponse(error) ? error.status : null;
  const message = isRouteErrorResponse(error)
    ? error.statusText
    : error instanceof Error
    ? error.message
    : "حدث خطأ غير متوقع";

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center text-center px-4">
      <p className="text-brand-green text-6xl font-bold mb-4">{status ?? "!"}</p>
      <h1 className="text-white text-2xl font-bold mb-2">
        {status === 404 ? "الصفحة غير موجودة" : "حدث خطأ"}
      </h1>
      <p className="text-gray-400 text-sm mb-8 max-w-sm">{message}</p>
      <Link
        to="/"
        className="px-5 py-2 bg-brand-green text-white text-sm font-semibold rounded-xl hover:bg-brand-green-light transition-colors"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}
