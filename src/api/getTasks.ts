import { apiClient } from "../libs/axios";

export const getTasks = async () => {
  return await apiClient.get("/tasks");
};
