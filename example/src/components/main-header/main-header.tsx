import React, { useContext } from 'react'
import Heading3 from '../text/heading3/heading3';
import MainHeaderContainer from './main-header-style';



const MainHeader: React.FC = () => {
  return <MainHeaderContainer>
    <Heading3 className="main-header-logo">
      <p>Use Form</p>
    </Heading3>
  </MainHeaderContainer>
}

export default MainHeader;
