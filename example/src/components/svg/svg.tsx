import React from "react";
import { ReactSVG } from "react-svg";
import SvgContainer from "./svg-style";

interface SvgProps {
  src: string;
}

const Svg: React.FC<SvgProps> = (props: SvgProps) => {
  const { src } = props;
  return (
    <SvgContainer>
      <ReactSVG src={src} className="svg-component" />
    </SvgContainer>
  );
};

export default Svg;
