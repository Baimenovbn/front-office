import { IFileUpload } from '../components/FileUpload';
import { EStateKeys } from '../models/enums/state-keys.enum';

export const fileFields: IFileUpload[] = [
  {
    label: 'Удостоверение личности / Жеке куәлік',
    name: EStateKeys.DOCUMENT_FILES,
    helperText: '2 фотки с обеих сторон / 2 жағынан фотоға түсіріп жіберіңіз',
    maxFiles: 2,
  },
  {
    label: "Паспорт вакцинации / Вакцина паспортi",
    name: EStateKeys.VACCINE_PASSPORT_FILES,
    helperText: "Скачать приложение eGov mobile – войдите с помощью ИИН и номера телефона– внизу посередине есть кнопка «Сервисы» – далее «Цифровые документы», выберите Паспорт вакцинации // eGov mobile приложениясы – ЖСН (ИИН) және телефон нөмір арқылы кіріңіз – астында кнопка «Сервисы» – «Цифровые документы», «Паспорт вакцинации» таңдап алыңыз",
    maxFiles: 1,

  },
  {
    label: "Санитарная книжка / Санитарлық кітап",
    name: EStateKeys.MEDICAL_PASSPORT_FILES,
    helperText: "Разворот с фото 3х4 и 13 пункт - допуск к работе (2 фото)",
    maxFiles: 2,
  },
  {
    label: "Ваше фото для бейджика / Бейджикке арналган сурет",
    name: EStateKeys.BADGE_FILES,
    maxFiles: 1,
    helperText: '',
  }
]
