import styled from 'styled-components'
import { colors } from '../../assets/colors/colors'
import { screenSizes } from '../../constants/screens'

const HomeContainer = styled.div`
  margin: 24px 16px; 

  @media screen and (min-width: ${screenSizes.ipad}px){ 
    margin: 64px 7%; 
  }

  .home-title {
    text-align: center; 
    color: ${colors.white};
    margin-bottom: 24px;

    @media screen and (min-width: ${screenSizes.ipad}px){ 
      margin-bottom: 32px;
    }
  }

  //TODO: examples > 4 , parse to display grid
  .list-examples {
    @media screen and (min-width: ${screenSizes.ipad}px){ 
      display: flex; 
      align-items: center; 
      justify-content: center; 
    }

    .example {
      margin-bottom: 24px; 

      &:last-child {
        margin-bottom: 0;
      }

       @media screen and (min-width: ${screenSizes.ipad}px){ 
        width: calc((100% - 24px) / 2);
        margin-right: 24px;
        margin-bottom: 0;

         &:last-child {
          margin-right: 0;
        }
       }
    }
  }

`

export default HomeContainer