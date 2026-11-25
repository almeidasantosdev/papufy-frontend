import { getWebSocketBaseUrl } from "./env";

export function getWebSocketUrl(token: string): string {
  const base = getWebSocketBaseUrl().replace(/\/ws$/, "");
  const path = `${base}/ws?token=${encodeURIComponent(token)}`;
  if (path.startsWith("/") && typeof window !== "undefined") {
    const proto = window.location.protocol === "https:" ? "wss:" : "ws:";
    return `${proto}//${window.location.host}${path}`;
  }
  return path;
}
