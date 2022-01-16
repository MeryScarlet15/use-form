import styled from 'styled-components'
import { screenSizes } from '../../constants/screens'

const MainLayoutContainer = styled.div`
  .main-content {
    width: 100%;
    padding-top: 56px;

    @media screen and (min-width: ${screenSizes.ipad}px){ 
      padding-top: 80px;
    }
  }
`

export default MainLayoutContainer