import React from "react";
import BodyText from "../../components/text/body-text/body-text";
import Heading4 from "../../components/text/heading4/heading4";
import HandleValueForm from "../../containers/handle-value-form/handle-value-form";
import HandleValuePageContainer from "./handle-value-style";

const HandleValuePage: React.FC = () => {
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
        <HandleValueForm />
      </div>
    </div>
  </HandleValuePageContainer>
}

export default HandleValuePage;