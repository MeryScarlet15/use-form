import React from 'react'
import { colors } from '../../assets/colors/colors';
import ButtonColor from '../../components/buttons/button-color/button-color';
import InputText from '../../components/input-text/input-text';
import useForm from '../../hooks/useForm/use-form';
import { IFormValidations, ISubmitUseFormParams, IValidation } from '../../hooks/useForm/use-form-types';
import { EmailValidation, RequiredValidation } from '../../hooks/useForm/use-form-validations';
import HandleValuesFormContainer from './handle-values-form-style'


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

const useHandleValuesForm = () => {
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

  const handleFillButton = () => {
    const newValues = {
      surname: 'Example',
      email: "example@example.com"
    }

    formActions.setAGroupOfValues(newValues)
  }

  return {
    ...formActions,
    handleFillButton
  }
}

const HandleValuesForm: React.FC = () => {
  const actions = useHandleValuesForm()

  return <HandleValuesFormContainer>
    <form
      className="handle-values-form"
      id="handle-values-form"
      onSubmit={(event) => {
        event.preventDefault()
        actions.onSubmit()
      }}
    >
      <div className="handle-values-field">
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

      <div className="handle-values-field">
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

      <div className="handle-values-field">
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
            actions.handleFillButton();
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