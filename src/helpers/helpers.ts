import {IBackendDate} from '../API';
import {IFinalFormState, IFormState} from '../models/interfaces/form-state.interface';
import {EStateKeys} from '../models/enums/state-keys.enum';
import {base64} from '../models/types/base64.type';

export function getBase64(file: File | null | undefined): Promise<base64> {
  if (!file) {
    return new Promise(res => res(null));
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export function generateCode(length = 10) {
  const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}

export function getFormattedDate(date: Date): IBackendDate {
  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear()
  }
}

export function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export async function transformDataForBackend(state: IFormState): Promise<IFinalFormState> {
  const phone = EStateKeys.PHONE;
  const newDate = getFormattedDate(state[EStateKeys.DOCUMENT_ISSUED_AT]);
  const code =  generateCode();

  return new Promise(res => {
    Promise.all([
      Promise.all(state[EStateKeys.DOCUMENT_FILES].map(async (f) => (await getBase64(f)))),
      Promise.all(state[EStateKeys.VACCINE_PASSPORT_FILES].map(async (f) => (await getBase64(f)))),
      Promise.all(state[EStateKeys.MEDICAL_PASSPORT_FILES].map(async (f) => (await getBase64(f)))),
      Promise.all(state[EStateKeys.BADGE_FILES].map(async (f) => (await getBase64(f)))),
    ]).then(([docs, vacc, med, badge]) => {
      res({
        ...state,
        [EStateKeys.PHONE]: `7${state[phone]}`,
        [EStateKeys.DOCUMENT_ISSUED_AT]: newDate,
        [EStateKeys.DOCUMENT_FILES]: docs,
        [EStateKeys.VACCINE_PASSPORT_FILES]: vacc,
        [EStateKeys.MEDICAL_PASSPORT_FILES]: med,
        [EStateKeys.BADGE_FILES]: badge,
        [EStateKeys.CODE]: code
      })
    });
  });


}

