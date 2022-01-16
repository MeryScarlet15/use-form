import styled from 'styled-components';
import { colors } from '../../assets/colors/colors';
import { screenSizes } from '../../constants/screens';

const MainHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  background-color: ${colors.black};
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white; 

  @media screen and (min-width: ${screenSizes.ipad}px){ 
    height: 64px;
    padding: 0 64px;
    justify-content: flex-start;

  }

`
export default MainHeaderContainer;