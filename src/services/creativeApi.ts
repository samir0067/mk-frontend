import axios from "axios";
import { Creative } from "utils/types";

const creativeApi = axios.create({
  baseURL: "http://localhost:3001",
});

export const getCreatives = async (pages: number, limits: number) => {
  const response = await creativeApi.get(`/creatives?_page=${pages}&_limit=${limits}`);
  return response.data;
};

export const getCreative = async (id?: string) => {
  return await creativeApi.get(`/creatives/${id}`);
};

export const updateCreative = async (creative: Creative, id?: string) => {
  return await creativeApi.patch(`/creatives/${id}`, creative);
};

export const deleteCreative = async (id?: string) => {
  return await creativeApi.delete(`/creatives/${id}`);
};

export default creativeApi;
