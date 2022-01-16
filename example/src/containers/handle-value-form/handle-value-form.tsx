import React from 'react'
import { colors } from '../../assets/colors/colors';
import ButtonColor from '../../components/buttons/button-color/button-color';
import InputText from '../../components/input-text/input-text';
import useForm from '../../hooks/useForm/use-form';
import { IFormValidations, ISubmitUseFormParams, IValidation } from '../../hooks/useForm/use-form-types';
import { EmailValidation, RequiredValidation } from '../../hooks/useForm/use-form-validations'
import HandleValueFormContainer from './handle-value-form-style'

interface IFormValues {
  name: string;
  surname: string;
  email: string;
}

const requiredValidation: IValidation = RequiredValidation();
const emailValidation: IValidation = EmailValidation()

const formValidations: IFormValidations<IFormValues> = {
  name: [requiredValidation],
  surname: [],
  email: [requiredValidation, emailValidation]
}


const useHandleValueForm = () => {
  const initialValues: IFormValues = {
    name: '',
    surname: '',
    email: '',
  }

  const submit = (params: ISubmitUseFormParams<IFormValues>) => {
    console.log(params.values)
  }

  const formActions = useForm<IFormValues>(
    {
      initialValues,
      formValidations,
      submit
    }
  )

  return {
    ...formActions
  }
}

const HandleValueForm: React.FC = () => {
  const actions = useHandleValueForm()

  return <HandleValueFormContainer>
    <form
      className="handle-value-form"
      id="handle-value-form"
    >
      <div className="handle-value-field">
        <InputText
          label="Name"
          placeholder="Name"
          value={actions.values.name}
          events={{
            onBlur: (event: any) => actions.handleFieldEvent(event.target.value, 'name')
          }}
          errorText={actions.errorValues.name.errorText}
        />
      </div>

      <div className="handle-value-field">
        <InputText
          label="Surname"
          placeholder="Surname"
          value={actions.values.surname}
          events={{
            onBlur: (event: any) => actions.handleFieldEvent(event.target.value, 'surname')
          }}
          errorText={actions.errorValues.surname.errorText}
        />
      </div>

      <div className="handle-value-field">
        <InputText
          label="Email"
          placeholder="Email"
          value={actions.values.email}
          events={{
            onBlur: (event: any) => actions.handleFieldEvent(event.target.value, 'email')
          }}
          errorText={actions.errorValues.email.errorText}
        />
      </div>

    </form>

    <div className="handle-value-button">
      <ButtonColor
        id="handle-value-button"
        form='handle-value-form'
        role='button'
        text="Submit"
        height='medium'
        type="primary"
        color={{
          primary: colors.blueMedium,
          secondary: colors.white,
          text: colors.white
        }}
      />
    </div>
  </HandleValueFormContainer>
}

export default HandleValueForm