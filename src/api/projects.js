import apiClient from "./client";
 
const BASE = "/projects";
 
export const projectsApi = {
  /** Fetch all projects; optionally filter by category or featured flag */
  getAll: (params = {}) =>
    apiClient.get(BASE, { params }).then((r) => r.data),
 
  /** Fetch a single project by id */
  getOne: (id) => apiClient.get(`${BASE}/${id}`).then((r) => r.data),
};