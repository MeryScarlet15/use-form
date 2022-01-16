import React from 'react'
import { colors } from '../../assets/colors/colors';
import ButtonColor from '../../components/buttons/button-color/button-color';
import InputText from '../../components/input-text/input-text';
import useForm from '../../hooks/useForm/use-form';
import { IFormValidations, ISubmitUseFormParams, IValidation } from '../../hooks/useForm/use-form-types';
import { EmailValidation, RequiredValidation } from '../../hooks/useForm/use-form-validations'
import HandleValueFormContainer from './handle-value-form-style'

interface HandleValueFormProps {
  formActions: any;
}

const HandleValueForm: React.FC<HandleValueFormProps> = (props: HandleValueFormProps) => {
  const { formActions } = props
  return <HandleValueFormContainer>
    <form
      className="handle-value-form"
      id="handle-value-form"
      onSubmit={(event) => {
        event.preventDefault()
        formActions.onSubmit()
      }}
    >
      <div className="handle-value-field">
        <InputText
          label="Name*"
          placeholder="Name"
          value={formActions.values.name}
          events={{
            onBlur: (event: any) => formActions.handleFieldEvent(event.target.value, 'name')
          }}
          errorText={formActions.errorValues.name.errorText}
        />
      </div>

      <div className="handle-value-field">
        <InputText
          label="Surname"
          placeholder="Surname"
          value={formActions.values.surname}
          events={{
            onBlur: (event: any) => formActions.handleFieldEvent(event.target.value, 'surname')
          }}
          errorText={formActions.errorValues.surname.errorText}
        />
      </div>

      <div className="handle-value-field">
        <InputText
          label="Email*"
          placeholder="Email"
          value={formActions.values.email}
          events={{
            onBlur: (event: any) => formActions.handleFieldEvent(event.target.value, 'email')
          }}
          errorText={formActions.errorValues.email.errorText}
        />
      </div>

    </form>

    <div className="handle-value-button">
      <button
        form='handle-value-form'
      >
        <ButtonColor
          id="handle-value-button"
          text="Submit"
          height='medium'
          type="primary"
          color={{
            primary: colors.blueMedium,
            secondary: colors.white,
            text: colors.white
          }}
        />
      </button>
    </div>
  </HandleValueFormContainer>
}

export default HandleValueForm