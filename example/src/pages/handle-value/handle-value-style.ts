import styled from "styled-components";
import { colors } from "../../assets/colors/colors";
import { screenSizes } from "../../constants/screens";

const HandleValuePageContainer = styled.div`
  margin: 24px 16px;

  .handle-value-wrapper {
    width: 100%; 

    @media screen and (min-width: ${screenSizes.ipad}px){ 
      width: 60%;
      max-width: 524px;
    }
  }

  .handle-value-title {
    color: ${colors.white};
    margin-bottom: 24px;

    @media screen and (min-width: ${screenSizes.ipad}px){ 
      text-align: center; 
    }
  }

  .handle-value-description {
    color: ${colors.midGrey};
    margin-bottom: 24px;

    p {
      margin-bottom: 8px; 

      &:last-child {
        margin-bottom: 0;
      }
    }

    @media screen and (min-width: ${screenSizes.ipad}px){ 
      text-align: center; 

      p {
        margin-bottom: 16px;
      }
    }
  }

  @media screen and (min-width: ${screenSizes.ipad}px){ 
    margin: 64px 7%; 
    display: flex; 
    justify-content: center; 
  }

`
export default HandleValuePageContainer; 