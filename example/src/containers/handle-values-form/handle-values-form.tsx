import React from 'react'
import { colors } from '../../assets/colors/colors';
import ButtonColor from '../../components/buttons/button-color/button-color';
import InputText from '../../components/input-text/input-text';
import useForm from '../../hooks/useForm/use-form';
import { IFormValidations, ISubmitUseFormParams, IUseForm, IValidation } from '../../hooks/useForm/use-form-types';
import { EmailValidation, RequiredValidation } from '../../hooks/useForm/use-form-validations';
import HandleValuesFormContainer from './handle-values-form-style'

interface HandleValuesFormProps {
  formActions: any
}
const HandleValuesForm: React.FC<HandleValuesFormProps> = (props: HandleValuesFormProps) => {
  const { formActions } = props;

  return <HandleValuesFormContainer>
    <form
      className="handle-values-form"
      id="handle-values-form"
      onSubmit={(event) => {
        event.preventDefault()
        formActions.onSubmit()
      }}
    >
      <div className="handle-values-field">
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

      <div className="handle-values-field">
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

      <div className="handle-values-field">
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


    <div className="handle-values-buttons">
      <div className="fill-button">
        <ButtonColor
          id="handle-values-button"
          role='button'
          text="Fill surname and email"
          height='medium'
          type="primary"
          color={{
            primary: colors.white,
            secondary: colors.blueMedium,
            text: colors.blueMedium
          }}
          onClick={(event) => {
            event.preventDefault();
            formActions.handleFillButton();
          }}
        />
      </div>

      <div className="submit-button">
        <button form='handle-values-form'>
          <ButtonColor
            id="handle-values-button"
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
    </div>

  </HandleValuesFormContainer>
}

export default HandleValuesForm