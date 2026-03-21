import { useCallback, useEffect, useReducer } from "react";
import { projectsApi } from "../api/projects";

// ── State machine ──────────────────────────────────────────────────────────

const initialState = { items: [], total: 0, loading: false, error: null };

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.payload.items,
        total: action.payload.total,
      };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

// ── Hook ────────────────────────────────────────────────────────────────────

export function useProjects(filters = {}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProjects = useCallback(async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const data = await projectsApi.getAll(filters);
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (err) {
      const msg =
        err.response?.data?.error?.message ?? "Failed to load projects.";
      dispatch({ type: "FETCH_ERROR", payload: msg });
    }
  }, [JSON.stringify(filters)]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return { ...state, refetch: fetchProjects };
}