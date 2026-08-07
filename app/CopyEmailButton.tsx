"use client";

import { useEffect, useRef, useState } from "react";

const EMAIL = "hello@nicholas-ugbala.dev";

type CopyStatus = "idle" | "copied" | "error";

export default function CopyEmailButton() {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  async function copyEmail() {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard API unavailable");

      await navigator.clipboard.writeText(EMAIL);
      setStatus("copied");
    } catch {
      setStatus("error");
    }

    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setStatus("idle"), 2400);
  }

  const label = status === "copied" ? "Copied" : status === "error" ? "Copy failed" : "Copy email";

  return (
    <>
      <button className="copy-email" type="button" onClick={copyEmail}>
        {label}
      </button>
      <span className="copy-status" role="status" aria-live="polite">
        {status === "copied"
          ? " email address to clipboard."
          : status === "error"
            ? "Could not copy the email address. Please use the email link instead."
            : ""}
      </span>
    </>
  );
}
