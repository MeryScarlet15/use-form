import styled from "styled-components";
import { screenSizes } from "../../constants/screens";

const HandleValuesFormContainer = styled.div`
  .handle-values-form {
    margin-bottom: 24px;

    .handle-values-field {
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    @media screen and (min-width: ${screenSizes.ipad}px){ 
      margin-bottom: 32px;
    }
  }

  .handle-values-buttons {
    .fill-button {
      width: 100%;
      margin-bottom: 16px; 

      @media screen and (min-width: ${screenSizes.ipad}px){ 
        width: calc((100% - 16px) / 2);
        margin-right: 16px; 
        margin-bottom: 0;
      }
    }

    .submit-button {
      width: 100%;
      
      button {
        width: 100%; 
      }

      @media screen and (min-width: ${screenSizes.ipad}px){ 
        width: calc((100% - 16px) / 2);
      }
    }

    @media screen and (min-width: ${screenSizes.ipad}px){ 
      display: flex; 
      align-items: center; 
    }
  }

  
`

export default HandleValuesFormContainer