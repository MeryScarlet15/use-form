import styled from "styled-components";
import { screenSizes } from "../../constants/screens";

const HandleValueFormContainer = styled.div`
  .handle-value-form {
    margin-bottom: 24px; 

    .handle-value-field {
      margin-bottom: 16px; 

      &:last-child {
        margin-bottom: 0;
      }
    }

    @media screen and (min-width: ${screenSizes.ipad}px){ 
      margin-bottom: 32px;
    }
  }

  .handle-value-button {
    margin: 0 auto; 
    width: 100%;

    button {
      width: 100%;
    }

    @media screen and (min-width: ${screenSizes.ipad}px){ 
      margin: 0 auto; 
      width: 140px;
    }
  }
`

export default HandleValueFormContainer; 