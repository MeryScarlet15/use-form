import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { screenSizes } from '../../constants/screens';
import { useDetectPlatform } from '../../hooks/useDetectDesktop/use-detect-platform';
import Heading3 from '../text/heading3/heading3';
import Heading4 from '../text/heading4/heading4';
import MainHeaderContainer from './main-header-style';



const MainHeader: React.FC = () => {
  const { platform } = useDetectPlatform({ maxMobile: screenSizes.ipad });

  return <MainHeaderContainer>
    {
      platform === "mobile" ?
        <Heading4 className="main-header-logo">
          <Link to={routes.home}>
            <p>Use Form</p>
          </Link>
        </Heading4>
        :
        <Heading3 className="main-header-logo">
          <Link to={routes.home}>
            <p>Use Form</p>
          </Link>
        </Heading3>
    }
  </MainHeaderContainer>
}

export default MainHeader;
