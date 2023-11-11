import { apiClient } from "../libs/axios";

export type UpdateTaskDTO = {
  title?: string;
  done?: boolean;
};

export const updateTask = async (id: string, data: UpdateTaskDTO) => {
  return await apiClient.post(`/tasks/${id}`, data);
};
