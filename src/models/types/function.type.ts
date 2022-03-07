import { EStateKeys } from '../../constants/enums/backend-fields.enum';

export type StateChanger = <T>(newValue: T, key: EStateKeys) => void;
