import Axios from "axios";
import { API_URL } from "../config";

export const apiClient = Axios.create({ baseURL: API_URL });
