import styled from 'styled-components'
import { colors } from '../../assets/colors/colors';
import { screenSizes } from '../../constants/screens';

const CardTextContainer = styled.div`
  width: 100%; 
  background: ${colors.background}; 
  border-radius: 8px;
  transition: 0.3s all ease-in-out;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  height: 240px; 
  cursor: pointer; 

  .card-text-title {
    color: ${colors.lightGrey};
  }

  &:hover {
    border: 1px solid ${colors.lightBlue};
    transition: 0.3s all ease-in-out;

    .card-text-title {
      color: ${colors.lightBlue};
    }
  }


  @media screen and (min-width: ${screenSizes.ipad}px){ 
    height: 343px; 
  }
`
export default CardTextContainer;