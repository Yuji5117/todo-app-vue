import { apiClient } from "../libs/axios";

export type CreateTaskDTO = {
  title: string;
};

export const createTask = async (data: CreateTaskDTO) => {
  return await apiClient.post("/tasks", data);
};
