import { IFileUpload } from '../components/UploadButton';
import { EBackendKeys } from './enums/backend-fields.enum';

export const fileFields: IFileUpload[] = [
  {
    label: 'Удостоверение личности / Жеке куәлік',
    stateKey: EBackendKeys.DOCUMENT_FILES,
    helpText: '2 фотки с обеих сторон / 2 жағынан фотоға түсіріп жіберіңіз',
  },
  {
    label: "Паспорт вакцинации / Вакцина паспортi",
    stateKey: EBackendKeys.VACCINE_PASSPORT_FILES,
    helpText: "Скачать приложение eGov mobile – войдите с помощью ИИН и номера телефона– внизу посередине есть кнопка «Сервисы» – далее «Цифровые документы», выберите Паспорт вакцинации // eGov mobile приложениясы – ЖСН (ИИН) және телефон нөмір арқылы кіріңіз – астында кнопка «Сервисы» – «Цифровые документы», «Паспорт вакцинации» таңдап алыңыз",
    sx: {maxWidth: '50%'}
  },
  {
    label: "Санитарная книжка / Санитарлық кітап",
    stateKey: EBackendKeys.MEDICAL_PASSPORT_FILES,
    helpText: "Разворот с фото 3х4 и 13 пункт - допуск к работе (2 фото)",
  },
  {
    label: "Ваше фото для бейджика / Бейджикке арналган сурет",
    stateKey: EBackendKeys.BADGE_FILES,
    helpText: '',
  }
]
