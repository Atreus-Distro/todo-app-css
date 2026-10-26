
import fetchService from "./fetchService.js";

const API_URL = "http://localhost:3000/tareas";

const addOne = async ({ texto, completada }) => {
  const payload = { texto, completada };
  const { data: nuevaTarea } = await fetchService.post(API_URL, payload);
  return nuevaTarea;
};

const getAllFromServer = async () => {
  const { data: todasLasTareas } = await fetchService.get(API_URL);
  return todasLasTareas;
};

const deleteOne = async (id) => {
  await fetchService.del(`${API_URL}/${id}`);
};

const updateOne = async (id, payload) => {
  const { data: tareaActualizada } = await fetchService.patch(`${API_URL}/${id}`, payload);
  return tareaActualizada;
};

const tareaService = {
  addOne,
  getAllFromServer,
  deleteOne,
  updateOne,
};

export default tareaService;