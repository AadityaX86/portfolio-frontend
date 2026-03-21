import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "/api/v1",
  headers: { "Content-Type": "application/json" },
  timeout: 10_000,
});

// Log request IDs from responses (useful for debugging)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const requestId = error.response?.headers?.["x-request-id"];
    if (requestId) {
      console.warn(`[API Error] request_id=${requestId}`, error.response?.data);
    }
    return Promise.reject(error);
  }
);

export default apiClient;