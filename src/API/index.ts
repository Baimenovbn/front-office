import axios from 'axios';
import { initialState } from '../store/initial-state';
const instance = axios.create({
  baseURL: 'https://requestbin.net/'
})

export interface IBackendDate {
  day: number;
  month: number;
  year: number;
}

export type backendData = typeof initialState & { date: IBackendDate };

export const API = {
  async sumbitForm(data: backendData, generatedCode = '') {
    return await instance.post(`r/${generatedCode}`, data);
  },

  async getCode() {
    return await instance.get(`r/?code`);
  }
}
