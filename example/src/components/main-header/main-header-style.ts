import styled from 'styled-components';
import { colors } from '../../assets/colors/colors';

const MainHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  background-color: ${colors.black};
  height: 64px;
  padding: 0 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: white; 

  .main-header-nav {
    display: flex; 
    align-items: center; 

    .main-header-list {
      display: flex;
      align-items: center;

      .main-header-element {
        cursor: pointer; 
        margin-right: 32px; 
        transition: 0.3s all ease-in-out; 

        &:last-child {
          margin-right: 0; 
        }

        &:hover {
          color: ${colors.blue};
          transition: 0.3s all ease-in-out; 
        }

      }
    }
  }

  .main-header-wallet {
    width: 104px; 
  }

  .main-header-address-container {
    position: relative; 
    width: 104px; 
    height: 32px; 

    .main-header-address {
      position: absolute; 
      right: 0; 
      top: 4px; 
      width: auto;
      padding: 4px; 
      color: ${colors.blueMedium};
      border: 1px solid ${colors.blueMedium};
      border-radius: 4px; 
    }
  }

`
export default MainHeaderContainer;