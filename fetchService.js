const post = async (url, payload) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(`Error: ${data.message}`);
  return { response, data };
};

const get = async (url) => {
  const response = await fetch(url, { method: "GET" });
  const data = await response.json();
  if (!response.ok) throw new Error(`Error: ${data.message}`);
  return { response, data };
};

const put = async (url, payload) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(`Error: ${data.message}`);
  return { response, data };
};

const patch = async (url, payload) => {
  const response = await fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(`Error: ${data.message}`);
  return { response, data };
};

// ⚠️ ESTA ES LA ÚNICA QUE CAMBIA
const del = async (url) => {
  const response = await fetch(url, { method: "DELETE" });
  if (!response.ok) throw new Error(`Error al eliminar`);
  return { response };
};

const fetchService = { post, get, put, patch, del };

export default fetchService;