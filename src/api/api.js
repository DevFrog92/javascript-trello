const API_ENDPOINT = "http://localhost:5000";

const option = {
  post: (payload) => ({
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }),
};

const request = async (url, option = {}) => {
  const response = await fetch(url, option);
  if (response.ok) {
    return await response.json;
  } else {
    throw new Error(response.status);
  }
};

export const api = {
  login: (payload) => {
    return request(`${API_ENDPOINT}/auth/login`, option.post(payload));
  },
};
