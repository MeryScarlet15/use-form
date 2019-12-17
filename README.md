# UseForm

### Functionality

This custom hook control all the form validations and values.

### Parameters

- **initialValues: **Object with the form values. The type of the object has to be passed  through a generic.
- **formValidations:** Object with the same keys as the initialValues object. Each key has to have the type 'IValidation[]' with the custom validations you want for the field.
- **submit :** Function to be executed in the onSubmit event.  The parameters has to have the type 'OnSubmitUseFormParams'.

### Return

- **values :** Actual form values.
- **errorValues :** Object with the form error fields.
- **handleFieldEvent :** Function to be executed in any change field event.
- **forceErrorValues :** Function that changes all the error fields.
- **resetErrorValues :** Function that resets the changes of the errorValues object.
- **errorTextForm:** Form global error.
- **onSubmit:** Function to be executed in the form onSubmit.
- **changeErrorTextForm:** Function to change the errorTextForm value.

### Default Validations

- **RequiredValidation**
- **EmailValidation**
- **EqualsValidation**
- **UrlValidation**
- **CreditCardValidation**
- **PhoneValidation**
- **MobileValidation**

### Example component
```javascript
import React from 'react'
import UseFormExampleContainer from './use-form-example-style'
import Button from '../../components/buttons/button'
import InputText from '../../components/form-components/input-text/input-text'
import useForm from '../../hooks/useForm/use-form'
import { validOnChange } from '../../utils/form-validations'
import { ISubmitUseFormParams, IValidation, IFormValidations } from '../../hooks/useForm/use-form-types'
import { isEmpty, isValidEmail } from '../../utils/validations'


interface FormValuesType {
  name: string;
  surname: string;
  email: string;
}


const requiredValidation: IValidation = {tag: 'REQUIRED', method: (value: any, name: string) => !isEmpty(value), errorText: 'El campo está vacío'}
const emailValidation: IValidation = {tag: 'EMAIL', method: (value: any, name: string) => isValidEmail(value), errorText: 'El email es incorrecto'}


const formValidations: IFormValidations<FormValuesType> = {
  name: [requiredValidation],
  surname: [],
  email: [requiredValidation, emailValidation]
}


const useFormExample = () => {
  const initialValues: FormValuesType = {
    name: '',
    surname:'',
    email: '',
  }


  const submit = (params: ISubmitUseFormParams<FormValuesType>) => {
    console.log(params.values)
  }


  const formActions = useForm<FormValuesType>(
    {initialValues,
    formValidations,
    submit
  }
  )


  return {
    ...formActions
  }
}


const FormExample: React.FC = () => {
  const actions = useFormExample();
  return (
    <UseFormExampleContainer>
      <form className="form-wrapper">
        <h1 className="title">Ejemplo useForm</h1>
        <div className="field">
          <InputText
            label="Name"
            onBlur={(e: any) => actions.handleFieldEvent(e.target.value, 'name')}
            errorLabel={actions.errorValues.name.errorText}


          />
        </div>
        <div className="field">
          <InputText
            label="Surname"
            onBlur={(e: any) => actions.handleFieldEvent(e.target.value, 'surname')}
            errorLabel={actions.errorValues.surname.errorText}
          />
        </div>
        <div className="field">
          <InputText
            label="Email"
            onBlur={(e: any) => actions.handleFieldEvent(e.target.value, 'email')}
            errorLabel={actions.errorValues.email.errorText}


          />
        </div>
        <div className="btn-submit">
          <Button text="Send" onClick={() => actions.onSubmit()}/>
        </div>
      </form>
    </UseFormExampleContainer>
  )
}


export default FormExample;
```

### Explanation of the example component

First, we will create an interface to type all the form fields.

```javascript
interface FormValuesType {
  name: string;
  surname: string;
  email: string;
}
```

Then, we define the custom validation with the type 'IValidation'.

**Keys of 'IValidation':**

- **tag:** Validation name.
- **method:** This method is the one that will be executed during the validation. The method will bring us the field value, the key name and an object with the form values and will return true when the validation is correct. 
- **errorText:** Error validation text.

```javascript
const requiredValidation: IValidation = {tag: 'REQUIRED', method: (value: any, name: string) => !isEmpty(value), errorText: 'El campo está vacío'} 

const emailValidation: IValidation = {tag: 'EMAIL', method: (value: any, name: string) => isValidEmail(value), errorText: 'El email es incorrecto'}
```
UseForm has default common validations.

Later, the hook will require 'formValues' parameter. This parameter will contain the same keys as 'initialValues' object and they will contain an array with the validations the field has to pass. 

```javascript
const formValidations: IFormValidations<FormValuesType> = {
  name: [requiredValidation],
  surname: [],
  email: [requiredValidation, emailValidation]
}
```

Then, we have to create the submit function. 

```javascript
const initialValues: FormValuesType = {
    name: '',
    surname:'',
    email: '',
}

const submit = (params: ISubmitUseFormParams<FormValuesType>) => {
   console.log(params.values)
}
```
¡Now we have all we need to define the useForm!

```javascript
const useFormExample = () => {
  const initialValues: FormValuesType = {
    name: '',
    surname:'',
    email: '',
  }

  const submit = (params: ISubmitUseFormParams<FormValuesType>) => {
    console.log(params.values)
  }

  const formActions = useForm<FormValuesType>(
    {initialValues,
    formValidations,
    submit
  }
  )

  return {
    ...formActions
  }
}
```

¡Finally, we just need to enjoy useForm!

In this example we use useForm with the event 'OnBlur'.

```javascript
const FormExample: React.FC = () => {
  const actions = useFormExample();
  return (
    <UseFormExampleContainer>
      <form className="form-wrapper">
        <h1 className="title">Ejemplo useForm</h1>
        <div className="field">
          <InputText
            label="Name"
            onBlur={(e: any) => actions.handleFieldEvent(e.target.value, 'name')}
            errorLabel={actions.errorValues.name.errorText}


          />
        </div>
        <div className="field">
          <InputText
            label="Surname"
            onBlur={(e: any) => actions.handleFieldEvent(e.target.value, 'surname')}
            errorLabel={actions.errorValues.surname.errorText}
          />
        </div>
        <div className="field">
          <InputText
            label="Email"
            onBlur={(e: any) => actions.handleFieldEvent(e.target.value, 'email')}
            errorLabel={actions.errorValues.email.errorText}


          />
        </div>
        <div className="btn-submit">
          <Button text="Send" onClick={() => actions.onSubmit()}/>
        </div>
      </form>
    </UseFormExampleContainer>
  )
}


export default FormExample;
```
