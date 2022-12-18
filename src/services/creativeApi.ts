import axios from "axios";
import { Creative } from "utils/types";

const creativeApi = axios.create({
  baseURL: "http://localhost:3001",
});

export const getCreatives = async (pages: number, limits: number) => {
  const response = await creativeApi.get(`/creatives?_page=${pages}&_limit=${limits}`);
  return response.data;
};

export const addCreative = async (creative: Creative) => {
  return await creativeApi.post("/creatives", creative);
};

export const updateCreative = async (creative: Creative) => {
  return await creativeApi.put(`/creatives/${creative.id}`, creative);
};

export const deleteCreative = async ({ id }: Creative) => {
  return await creativeApi.delete(`/creatives/${id}`);
};

export default creativeApi;
