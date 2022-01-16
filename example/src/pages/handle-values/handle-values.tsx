import React from 'react'
import BodyText from '../../components/text/body-text/body-text'
import Heading4 from '../../components/text/heading4/heading4'
import HandleValuesForm from '../../containers/handle-values-form/handle-values-form'
import HandleValuesPageContainer from './handle-values-style'

const HandleValuesPage: React.FC = () => {
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
        <HandleValuesForm />
      </div>
    </div>
  </HandleValuesPageContainer>
}

export default HandleValuesPage