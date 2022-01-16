import React, { useState } from 'react'
import ModalSuccess from '../../components/modals/modal-success/modal-success'
import BodyText from '../../components/text/body-text/body-text'
import Heading4 from '../../components/text/heading4/heading4'
import HandleValuesForm from '../../containers/handle-values-form/handle-values-form'
import useForm from '../../hooks/useForm/use-form'
import { IFormValidations, ISubmitUseFormParams, IValidation } from '../../hooks/useForm/use-form-types'
import { EmailValidation, RequiredValidation } from '../../hooks/useForm/use-form-validations'
import HandleValuesPageContainer from './handle-values-style'

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
  const [submitModal, setSubmitModal] = useState<boolean>(false)

  const initialValues: IFormValues = {
    name: '',
    surname: '',
    email: '',
  }

  const submit = (params: ISubmitUseFormParams<IFormValues>) => {
    console.log(params.values)
    setSubmitModal(true);
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
    handleFillButton,
    submitModal,
    setSubmitModal
  }
}

const HandleValuesPage: React.FC = () => {
  const actions = useHandleValuesForm()

  return <HandleValuesPageContainer>
    <div className="handle-values-wrapper">
      <Heading4 className="handle-values-title">
        <h1>SetAGroupOfValues Form</h1>
      </Heading4>

      <BodyText className="handle-values-description">
        <p>In this form we are going to autocomplete using setAGroupOfValues. </p>
        <p>This function is responsible for changing a group of values in the form.</p>
        <p>There's no need to pass the entire form object as a parameter, only the values you want to change.</p>
      </BodyText>

      <div className="handle-values-form-container">
        <HandleValuesForm
          formActions={actions}
        />
      </div>

      {
        actions.submitModal &&
        <ModalSuccess
          onClose={() => actions.setSubmitModal(false)}
          open={actions.submitModal}
          title="Submit Form"
          description={`Values: ${actions.values.name} ${actions.values.surname} and ${actions.values.email}`}
          className="handle-values-submit"
          headingType="h2"
        />
      }
    </div>
  </HandleValuesPageContainer>
}

export default HandleValuesPage