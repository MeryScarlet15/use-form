import { Validator } from 'class-validator'
import {
  IValidation,
  IDefaultValidation,
  IPhoneRegion,
  IMobileLocale,
  IRequired,
  IEmail,
  IEquals,
  IUrl,
  ICreditCard,
  IPhone,
  IMobile,
  IErrorTextValidation,
  IEqualsParams,
  IPhoneParams,
  IMobileParams
} from './use-form-types'

const validations = new Validator()

export const RequiredValidation: IRequired = <IValue = string | boolean>(
  params: IErrorTextValidation
) => {
  return {
    tag: 'REQUIRED',
    method: (value: IValue, name: string) => validations.isEmpty(value),
    errorText: params.errorText || 'Required field'
  }
}

export const EmailValidation: IEmail = (params: IErrorTextValidation) => {
  return {
    tag: 'REQUIRED',
    method: (value: string, name: string) => validations.isEmail(value),
    errorText: params.errorText || 'Invalid email'
  }
}

export const EqualsValidation: IEquals = <IValue = string | boolean>(
  params: IEqualsParams
) => {
  return {
    tag: 'REQUIRED',
    method: (value: IValue, name: string, formValues: any) =>
      formValues[params.compareName] === value,
    errorText:
      params.errorText ||
      `The field is not equal with the ${params.compareName} field`
  }
}

export const UrlValidation: IUrl = (params: IErrorTextValidation) => {
  return {
    tag: 'REQUIRED',
    method: (value: string, name: string) => validations.isEmail(value),
    errorText: params.errorText || 'Invalid url'
  }
}

export const CreditCardValidation: ICreditCard = (
  params: IErrorTextValidation
) => {
  return {
    tag: 'REQUIRED',
    method: (value: string, name: string) => validations.isCreditCard(value),
    errorText: params.errorText || 'Invalid credit card'
  }
}

export const PhoneValidation: IPhone = (params: IPhoneParams) => {
  return {
    tag: 'REQUIRED',
    method: (value: string, name: string) =>
      validations.isPhoneNumber(value, params.region),
    errorText: params.errorText || 'Invalid phone'
  }
}

export const MobileValidation: IMobile = (params: IMobileParams) => {
  return {
    tag: 'REQUIRED',
    method: (value: string, name: string) =>
      validations.isPhoneNumber(value, params.region),
    errorText: params.errorText || 'Invalid phone'
  }
}
