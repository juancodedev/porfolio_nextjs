"use client";

import { useEffect, useRef, useCallback } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: TurnstileOptions) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

interface TurnstileOptions {
  sitekey: string;
  callback?: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
  theme?: "light" | "dark" | "auto";
  tabindex?: number;
  "refresh-expired"?: "auto" | "manual" | "never";
  "data-action"?: string;
}

interface TurnstileWidgetProps {
  siteKey: string;
  onVerify: (token: string | null) => void;
  theme?: "light" | "dark" | "auto";
}

export function TurnstileWidget({ siteKey, onVerify, theme = "auto" }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | undefined>(undefined);
  const scriptLoadedRef = useRef<boolean>(false);

  const handleExpired = useCallback(() => {
    onVerify(null);
  }, [onVerify]);

  const handleError = useCallback(() => {
    onVerify(null);
  }, [onVerify]);

  useEffect(() => {
    if (scriptLoadedRef.current) return;

    const initWidget = () => {
      if (!window.turnstile || !containerRef.current) return;
      
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token: string) => onVerify(token),
        "expired-callback": handleExpired,
        "error-callback": handleError,
        theme,
        "refresh-expired": "auto",
        "data-action": "turnstile-spin-v1",
      });
    };

    if (document.getElementById("cf-turnstile-script")) {
      scriptLoadedRef.current = true;
      // Script is already loading or loaded; wait for turnstile to be ready
      const check = setInterval(() => {
        if (window.turnstile) {
          clearInterval(check);
          initWidget();
        }
      }, 100);
      return () => clearInterval(check);
    }

    const script = document.createElement("script");
    script.id = "cf-turnstile-script";
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      scriptLoadedRef.current = true;
      initWidget();
    };
    document.head.appendChild(script);

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, [siteKey, onVerify, handleExpired, handleError, theme]);

  return (
    <div
      ref={containerRef}
      className="cf-turnstile"
      data-action="turnstile-spin-v1"
    />
  );
}
