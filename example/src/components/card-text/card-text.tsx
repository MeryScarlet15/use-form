import React from 'react'
import { screenSizes } from '../../constants/screens'
import { useDetectPlatform } from '../../hooks/useDetectDesktop/use-detect-platform'
import HeadintElement, { THeadings } from '../text/heading-element/heading-element'
import Heading3 from '../text/heading3/heading3'
import Heading4 from '../text/heading4/heading4'
import CardTextContainer from './card-text-style'

interface CardTextProps {
  text: string;
  heading: THeadings
}
const CardText: React.FC<CardTextProps> = (props: CardTextProps) => {
  const { text, heading } = props;
  const { platform } = useDetectPlatform({ maxMobile: screenSizes.ipad });

  return <CardTextContainer>
    {
      platform === "mobile" ?
        <Heading4 className="card-text-title">
          <HeadintElement
            heading={heading}
            text={text}
          />
        </Heading4>
        :
        <Heading3 className="card-text-title">
          <HeadintElement
            heading={heading}
            text={text}
          />
        </Heading3>
    }

  </CardTextContainer>
}

export default CardText;