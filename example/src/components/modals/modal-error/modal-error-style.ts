import styled from 'styled-components'
import { colors } from '../../../assets/colors/colors';

const ModalErrorContainer = styled.div`
  
  .modal-error-dialog {
    width: 50%;
    min-width: 400px;
    max-width: 500px;
    background: ${colors.white};
    border-radius: 8px;
    padding: 24px; 
    padding-top: 16px; 
  }

  .modal-error-topbar {
    margin-bottom: 16px; 
  }

  .modal-error-content {
    .modal-error-description {
      margin-bottom: 24px; 
    }

    .modal-error-button {
      width: 144px; 
      margin: 0 auto; 
    }
  }
`

export default ModalErrorContainer;