export function getLastSegment(url: string): string {
  const parts = url.split("/").filter(Boolean);
  const last = parts.pop() || "";
  return decodeURIComponent(last);
}
