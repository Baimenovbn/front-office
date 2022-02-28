import axios from 'axios';
import { initialState } from '../store/initial-state';
const instance = axios.create({
  baseURL: 'https://requestbin.net/'
})

export const API = {
  async sumbitForm(generatedCode: string, data: typeof initialState) {
    return await instance.post(`r/${generatedCode}`, data);
  }
}
