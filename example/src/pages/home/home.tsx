import React from 'react'
import { Link } from 'react-router-dom';
import CardText from '../../components/card-text/card-text';
import Heading2 from '../../components/text/heading2/heading2';
import Heading3 from '../../components/text/heading3/heading3';
import { routes } from '../../constants/routes';
import { screenSizes } from '../../constants/screens';
import { useDetectPlatform } from '../../hooks/useDetectDesktop/use-detect-platform';
import HomeContainer from './home-style';

const HomePage: React.FC = () => {
  const { platform } = useDetectPlatform({ maxMobile: screenSizes.ipad });

  return <HomeContainer>
    {platform === "mobile" ?
      <Heading3 className="home-title">
        <h1>Test the useForm Hook!</h1>
      </Heading3>
      :
      <Heading2 className="home-title">
        <h1>Test the useForm Hook!</h1>
      </Heading2>
    }

    <ul className="list-examples">
      <li className="example">
        <Link
          className="example-link"
          to={routes.handleValue}
        >
          <CardText
            text="HandleFieldEvent"
            heading="h2"
          />
        </Link>
      </li>

      <li className="example">
        <Link
          className="example-link"
          to={routes.handleValues}
        >
          <CardText
            text="SetAGroupOfValues"
            heading="h2"
          />
        </Link>
      </li>
    </ul>
  </HomeContainer>
}

export default HomePage; 