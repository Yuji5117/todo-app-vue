import { apiClient } from "../libs/axios";

export const deleteTask = async (id: string) => {
  return await apiClient.delete(`/tasks/${id}`);
};
