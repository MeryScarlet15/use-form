// ErrorTypes
export interface Error {
  error: boolean;
  errorText: string;
}

export type IErrorValues<ValuesType> = { [key in keyof ValuesType]: Error };

export interface DefaultErrorValuesType {
  [key: string]: Error;
}

//validations

export interface IValidation<Tag = string, FormValues = Object> {
  tag: Tag;
  method: (value: any, name: string, formValues?: FormValues) => boolean;
  errorText: string;
}

export type IFormValidations<FormValues = object> = {
  [key in keyof FormValues]: IValidation[];
};

export interface ValidOnChangeType<ValueType = string | boolean> {
  (
    value: ValueType,
    name: string,
    errorValuesTypes: {
      [key: string]: string[];
    },
    required?: boolean,
  ): Error;
}

export interface IDefaultValidation {
  (errorText?: string): IValidation;
}

// Values
export interface IDefaultFormValues {
  [key: string]: string | boolean;
}

//On submit Params
export interface ISubmitUseFormParams<IFormValues> {
  values: IFormValues;
  errorValues: IErrorValues<IFormValues>;
  changeErrorText: (text: string) => void;
}

// Use values

export interface IUseValuesParams<IFormValues> {
  initialValues: IFormValues;
  formValidations: IFormValidations<IFormValues>;
}

interface IUseValuesReturn<IFormValues, ErrorTypes> {
  values: IFormValues;
  errorValues: ErrorTypes;
  handleFieldEvent: (val: string, name: string) => void;
  forceErrorValues: (newErrorValues: ErrorTypes) => void;
  resetErrorValues: () => void;
}

export interface IUseValues {
  <IFormValues>(params: IUseValuesParams<IFormValues>): IUseValuesReturn<IFormValues, IErrorValues<IFormValues>>;
}

// Use form

export interface IUseFormParams<IFormValues> {
  initialValues: IFormValues;
  defaultErrorValue?: string;
  formValidations: IFormValidations<IFormValues>;
  submit: (params: ISubmitUseFormParams<IFormValues>) => void;
}

interface IUseFormReturn<IFormValues, ErrorTypes> extends IUseValuesReturn<IFormValues, ErrorTypes> {
  errorTextForm: string;
  onSubmit: () => void;
  changeErrorTextForm: (textError: string) => void;
}

export interface IUseForm {
  <IFormValues>(params: IUseFormParams<IFormValues>): IUseFormReturn<IFormValues, IErrorValues<IFormValues>>;
}

// Use form validations

export type IPhoneRegion =
  | "US"
  | "AG"
  | "AI"
  | "AS"
  | "BB"
  | "BM"
  | "BS"
  | "CA"
  | "DM"
  | "DO"
  | "GD"
  | "GU"
  | "JM"
  | "KN"
  | "KY"
  | "LC"
  | "MP"
  | "MS"
  | "PR"
  | "SX"
  | "TC"
  | "TT"
  | "VC"
  | "VG"
  | "VI"
  | "RU"
  | "KZ"
  | "EG"
  | "ZA"
  | "GR"
  | "NL"
  | "BE"
  | "FR"
  | "ES"
  | "HU"
  | "IT"
  | "VA"
  | "RO"
  | "CH"
  | "AT"
  | "GB"
  | "GG"
  | "IM"
  | "JE"
  | "DK"
  | "SE"
  | "NO"
  | "SJ"
  | "PL"
  | "DE"
  | "PE"
  | "MX"
  | "CU"
  | "AR"
  | "BR"
  | "CL"
  | "CO"
  | "VE"
  | "MY"
  | "AU"
  | "CC"
  | "CX"
  | "ID"
  | "PH"
  | "NZ"
  | "SG"
  | "TH"
  | "JP"
  | "KR"
  | "VN"
  | "CN"
  | "TR"
  | "IN"
  | "PK"
  | "AF"
  | "LK"
  | "MM"
  | "IR"
  | "SS"
  | "MA"
  | "EH"
  | "DZ"
  | "TN"
  | "LY"
  | "GM"
  | "SN"
  | "MR"
  | "ML"
  | "GN"
  | "CI"
  | "BF"
  | "NE"
  | "TG"
  | "BJ"
  | "MU"
  | "LR"
  | "SL"
  | "GH"
  | "NG"
  | "TD"
  | "CF"
  | "CM"
  | "CV"
  | "ST"
  | "GQ"
  | "GA"
  | "CG"
  | "CD"
  | "AO"
  | "GW"
  | "IO"
  | "AC"
  | "SC"
  | "SD"
  | "RW"
  | "ET"
  | "SO"
  | "DJ"
  | "KE"
  | "TZ"
  | "UG"
  | "BI"
  | "MZ"
  | "ZM"
  | "MG"
  | "RE"
  | "YT"
  | "ZW"
  | "NA"
  | "MW"
  | "LS"
  | "BW"
  | "SZ"
  | "KM"
  | "SH"
  | "TA"
  | "ER"
  | "AW"
  | "FO"
  | "GL"
  | "GI"
  | "PT"
  | "LU"
  | "IE"
  | "IS"
  | "AL"
  | "MT"
  | "CY"
  | "FI"
  | "AX"
  | "BG"
  | "LT"
  | "LV"
  | "EE"
  | "MD"
  | "AM"
  | "BY"
  | "AD"
  | "MC"
  | "SM"
  | "UA"
  | "RS"
  | "ME"
  | "XK"
  | "HR"
  | "SI"
  | "BA"
  | "MK"
  | "CZ"
  | "SK"
  | "LI"
  | "FK"
  | "BZ"
  | "GT"
  | "SV"
  | "HN"
  | "NI"
  | "CR"
  | "PA"
  | "PM"
  | "HT"
  | "GP"
  | "BL"
  | "MF"
  | "BO"
  | "GY"
  | "EC"
  | "GF"
  | "PY"
  | "MQ"
  | "SR"
  | "UY"
  | "CW"
  | "BQ"
  | "TL"
  | "NF"
  | "BN"
  | "NR"
  | "PG"
  | "TO"
  | "SB"
  | "VU"
  | "FJ"
  | "PW"
  | "WF"
  | "CK"
  | "NU"
  | "WS"
  | "KI"
  | "NC"
  | "TV"
  | "PF"
  | "TK"
  | "FM"
  | "MH"
  | "001"
  | "001"
  | "KP"
  | "HK"
  | "MO"
  | "KH"
  | "LA"
  | "001"
  | "001"
  | "BD"
  | "001"
  | "001"
  | "001"
  | "TW"
  | "001"
  | "MV"
  | "LB"
  | "JO"
  | "SY"
  | "IQ"
  | "KW"
  | "SA"
  | "YE"
  | "OM"
  | "PS"
  | "AE"
  | "IL"
  | "BH"
  | "QA"
  | "BT"
  | "MN"
  | "NP"
  | "001"
  | "TJ"
  | "TM"
  | "AZ"
  | "GE"
  | "KG"
  | "UZ";

export type IMobileLocale =
  | "ar-DZ"
  | "ar-SA"
  | "ar-SY"
  | "cs-CZ"
  | "de-DE"
  | "da-DK"
  | "el-GR"
  | "en-AU"
  | "en-GB"
  | "en-HK"
  | "en-IN"
  | "en-NZ"
  | "en-US"
  | "en-CA"
  | "en-ZA"
  | "en-ZM"
  | "es-ES"
  | "fi-FI"
  | "fr-FR"
  | "hu-HU"
  | "it-IT"
  | "ja-JP"
  | "ms-MY"
  | "nb-NO"
  | "nn-NO"
  | "pl-PL"
  | "pt-PT"
  | "ru-RU"
  | "sr-RS"
  | "tr-TR"
  | "vi-VN"
  | "zh-CN"
  | "zh-TW";

export interface IErrorTextValidation {
  errorText?: string;
}

export interface IRequired {
  (params: IErrorTextValidation): IValidation;
}

export interface IEmail {
  (params: IErrorTextValidation): IValidation;
}

export interface IMinLengthValidation {
  (params: IErrorTextValidation & { minLength: number }): IValidation;
}

export interface IEqualsParams extends IErrorTextValidation {
  compareName: string;
}

export interface IEquals {
  (params: IEqualsParams): IValidation;
}

export interface IUrl {
  (params: IErrorTextValidation): IValidation;
}

export interface ICreditCard {
  (params: IErrorTextValidation): IValidation;
}

export interface IIban {
  (params: IErrorTextValidation): IValidation;
}

export interface IPhoneParams extends IErrorTextValidation {
  region: IPhoneRegion;
}

export interface IPhone {
  (params: IPhoneParams): IValidation;
}

export interface IMobileParams extends IErrorTextValidation {
  region: IMobileLocale;
}

export interface IMobile {
  (params: IMobileParams): IValidation;
}
