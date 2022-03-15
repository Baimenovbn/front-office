import axios from 'axios';
import {IFinalFormState} from '../models/interfaces/form-state.interface';
const instance = axios.create({
  baseURL: 'https://requestbin.net/'
})

export interface IBackendDate {
  day: number;
  month: number;
  year: number;
}

export const API = {
  async submitForm(data: IFinalFormState, generatedCode = '') {
    return await instance.post(`r/${generatedCode}`, data);
  },

  async getCode(): Promise<string> {
    return (await instance.get(`r/?code`))?.data?.code;
  }
}
