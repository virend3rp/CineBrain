import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:10000";
export default async function fetchByTitle(title) {
  const res = axios.get(`/recommend/title/${movieTitle}`)
  return res.json();
}
