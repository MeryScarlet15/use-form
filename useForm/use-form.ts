import { useState } from 'react'
import {
  Error,
  IDefaultFormValues,
  IErrorValues,
  IUseValuesParams,
  IUseValues,
  IUseFormParams,
  IUseForm,
  IValidation
} from './use-form-types'

const DEFAULT_ERROR_NOTIFY = 'Hemos encontrado algunos errores.'

const useValues: IUseValues = <
  IFormValues extends { [key: string]: any } = IDefaultFormValues
>(
  params: IUseValuesParams<IFormValues>
) => {
  type ErrorValues = IErrorValues<IFormValues>

  const [values, setValues] = useState<IFormValues>(params.initialValues)

  let initialErrors: any = { ...values }

  Object.keys(initialErrors).map((key: string) => {
    initialErrors[key] = {
      error: false,
      errorText: ''
    }
  })

  const [errorValues, setErrorValues] = useState<ErrorValues>({
    ...initialErrors
  })

  const resetErrorValues = () => {
    let initialErrors: any = { ...values }

    Object.keys(initialErrors).map((key: string) => {
      initialErrors[key] = {
        error: false,
        errorText: ''
      }
    })

    setErrorValues(initialErrors)
  }

  const forceErrorValues = (newErrorValues: ErrorValues) => {
    setErrorValues(newErrorValues)
  }

  const handleFieldEvent = (val: any, name: string) => {
    setValues({
      ...values,
      [name]: val
    })

    let newError: Error = {
      error: false,
      errorText: ''
    }
    const { formValidations } = params

    const valueValidations: IValidation[] = formValidations[name]

    const valueValidation: IValidation | undefined = valueValidations.find(
      validation => !validation.method(val, name)
    )

    if (valueValidation) {
      newError = {
        error: true,
        errorText: valueValidation.errorText
      }
    }

    setErrorValues({
      ...errorValues,
      [name]: newError
    })
  }

  return {
    values,
    errorValues,
    handleFieldEvent,
    forceErrorValues,
    resetErrorValues
  }
}

const useForm: IUseForm = <
  IFormValues extends { [key: string]: any } = IDefaultFormValues
>(
  params: IUseFormParams<IFormValues>
) => {
  type ErrorValues = IErrorValues<IFormValues>

  const [errorTextForm, setErrorTextForm] = useState<string>('')

  const { initialValues, formValidations, submit } = params

  const formActions = useValues<IFormValues>({
    initialValues,
    formValidations
  })

  const changeErrorTextForm = (textError: string) => {
    setErrorTextForm(textError)
  }

  const validateForm = () => {
    const { formValidations } = params
    let valid: boolean = true

    const values: IFormValues = formActions.values

    let newErrorValues: ErrorValues = { ...formActions.errorValues }

    let inputError: Error = {
      error: false,
      errorText: ''
    }

    let valueValidation: IValidation | undefined = undefined

    Object.keys(values).map((key: string) => {
      inputError = {
        error: false,
        errorText: ''
      }

      valueValidation = formValidations[key].find(
        validation => !validation.method(values[key], key)
      )

      if (valueValidation) {
        valid = false
        inputError = {
          error: true,
          errorText: valueValidation.errorText
        }
      }

      newErrorValues = {
        ...newErrorValues,
        [key]: inputError
      }
    })
    formActions.forceErrorValues(newErrorValues)

    return valid
  }

  const onSubmit = () => {
    formActions.resetErrorValues()

    const isValid: boolean = validateForm()

    if (isValid) {
      submit({
        values: formActions.values,
        errorValues: formActions.errorValues,
        changeErrorText: changeErrorTextForm
      })
    } else {
      setErrorTextForm(params.defaultErrorValue || DEFAULT_ERROR_NOTIFY)
    }
  }

  return {
    ...formActions,
    errorTextForm,
    onSubmit,
    changeErrorTextForm
  }
}

export default useForm
