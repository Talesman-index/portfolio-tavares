"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Runtime Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background-primary flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-4xl font-syne font-extrabold text-white uppercase mb-4">
        Oups, une erreur s&apos;est produite.
      </h2>
      <p className="text-text-muted font-space mb-8 max-w-md">
        Une interruption visuelle inattendue. Nos excuses pour ce désagrément.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="btn-primary py-3 px-8"
        >
          Réessayer
        </button>
        <Link href="/" className="btn-secondary py-3 px-8">
          Accueil
        </Link>
      </div>
    </div>
  );
}
