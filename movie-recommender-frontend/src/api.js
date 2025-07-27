const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:10000";

export default async function fetchByTitle(title) {
  const res = await fetch(`${BASE_URL}/recommend/title?title=${encodeURIComponent(title)}`);
  return res.json();
}
