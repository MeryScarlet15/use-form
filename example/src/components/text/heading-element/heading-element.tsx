import React from "react"
import { Markup } from 'interweave';


export type THeadings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

interface HeadingElementProps {
  heading: THeadings,
  text: string;
}
const HeadingElement: React.FC<HeadingElementProps> = (props: HeadingElementProps) => {
  const {
    heading,
    text
  } = props;
  const element = `<${heading}>${text}</${heading}>`
  return <Markup content={element} />
}

export default HeadingElement;