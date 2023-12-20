import axios from "axios";

const URL ="http://localhost:8000";

console.log(URL);
const tasksApi = axios.create({
  baseURL: `${URL}/citas/api/v1/citas`,
});

export const getAllTasks = () => tasksApi.get("/");

export const getTask = (id) => tasksApi.get(`/${id}`);

export const createTask = (task) => tasksApi.post("/", task);

export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task);

export const deleteTask = (id) => tasksApi.delete(`/${id}`);
