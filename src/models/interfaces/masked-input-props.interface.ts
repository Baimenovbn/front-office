import {EStateKeys} from "../enums/state-keys.enum";

export interface IMaskedInputProps {
    name: EStateKeys;
    format: string;
    mask?: string;
}