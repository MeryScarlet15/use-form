import styled from "styled-components";
import { colors } from "../../../assets/colors/colors";

const ModalSuccessContainer = styled.div`
  .modal-success-dialog {
    width: 50%;
    min-width: 400px;
    max-width: 500px;
    background: ${colors.white};
    border-radius: 8px;
    padding: 24px; 
    padding-top: 16px; 
  }

  .modal-success-topbar {
    margin-bottom: 16px; 
  }

  .modal-success-content {
    .modal-success-description {
      margin-bottom: 24px; 
    }

    .modal-success-button {
      width: 144px; 
      margin: 0 auto; 
    }
  }
`

export default ModalSuccessContainer;