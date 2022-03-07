import axios from 'axios';
import { initialState } from '../store/initial-state';
import { EStateKeys } from '../constants/enums/backend-fields.enum';
const instance = axios.create({
  baseURL: 'https://requestbin.net/'
})

export interface IBackendDate {
  day: number;
  month: number;
  year: number;
}

export type backendData = Omit<typeof initialState, 'document_issued_at'>
                          & { [EStateKeys.DOCUMENT_ISSUED_AT]: IBackendDate };

export const API = {
  async submitForm(data: backendData, generatedCode = '') {
    return await instance.post(`r/${generatedCode}`, data);
  },

  async getCode() {
    return await instance.get(`r/?code`);
  }
}
