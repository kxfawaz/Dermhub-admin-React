const BASE_URL = (import.meta.env.VITE_API_BASE_URL || "")
  .trim()
  .replace(/\/+$/, ""); // remove trailing slash

function getToken() {
  return localStorage.getItem("token"); // MUST be raw JWT: eyJ...
}

async function apiFetch(path, options = {}) {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization =  `${token}`;
  }

  const url = `${BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

  const res = await fetch(url, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${res.status} ${text}`);
  }

  return res;
}

/* ======================
   API HELPERS
   ====================== */

export async function fetchConsultations() {
  const res = await apiFetch("/api/consultations");
  return res.json();
}

export async function fetchConsultation(id) {
  const res = await apiFetch(`/api/consultations/${id}`);
  return res.json();
}

export async function fetchQuestions() {
  const res = await apiFetch("/api/questions");
  return res.json();
}

export async function fetchMainQuestion(id) {
  const res = await apiFetch(`/api/questions/${id}`);
  return res.json();
}

export async function addMainQuestion(data) {
  const res = await apiFetch("/api/questions", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function addFollowupQuestion(parentId, data) {
  const res = await apiFetch(`/api/questions/${parentId}/followups`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateMainQuestion(id, data) {
  const res = await apiFetch(`/api/questions/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateFollowupQuestion(id, data) {
  const res = await apiFetch(`/api/followups/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteMainQuestion(id) {
  const res = await apiFetch(`/api/questions/${id}`, {
    method: "DELETE",
  });
  return res.json();
}

export async function deleteFollowupQuestion(id) {
  const res = await apiFetch(`/api/followups/${id}`, {
    method: "DELETE",
  });
  return res.json();
}