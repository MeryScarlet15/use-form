import React, { useState } from "react";
import ModalSuccess from "../../components/modals/modal-success/modal-success";
import BodyText from "../../components/text/body-text/body-text";
import Heading4 from "../../components/text/heading4/heading4";
import HandleValueForm from "../../containers/handle-value-form/handle-value-form";
import useForm from "../../hooks/useForm/use-form";
import { IFormValidations, ISubmitUseFormParams, IValidation } from "../../hooks/useForm/use-form-types";
import { EmailValidation, RequiredValidation } from "../../hooks/useForm/use-form-validations";
import HandleValuePageContainer from "./handle-value-style";

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
  const [submitModal, setSubmitModal] = useState<boolean>(false)

  const initialValues: IFormValues = {
    name: '',
    surname: '',
    email: '',
  }

  const submit = (params: ISubmitUseFormParams<IFormValues>) => {
    console.log(params.values)
    setSubmitModal(true)
  }

  const formActions = useForm<IFormValues>(
    {
      initialValues,
      formValidations,
      submit
    }
  )

  return {
    ...formActions,
    submitModal,
    setSubmitModal
  }
}

const HandleValuePage: React.FC = () => {
  const actions = useHandleValueForm()

  return <HandleValuePageContainer>
    <div className="handle-value-wrapper">
      <Heading4 className="handle-value-title">
        <h1>HandleFieldValue Form</h1>
      </Heading4>

      <BodyText className="handle-value-description">
        <p>In this form we change the form state using the handleFieldEvent. </p>
        <p>This function is responsible for changing a single value of the form.</p>
        <p>Using it multiple times in a single change event is not recomended, because, the form is going to change only the last value changed.</p>
      </BodyText>

      <div className="handle-value-form-container">
        <HandleValueForm
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
  </HandleValuePageContainer>
}

export default HandleValuePage;