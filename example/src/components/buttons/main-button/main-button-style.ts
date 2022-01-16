import styled from "styled-components";
import BodyText from "../../text/body-text/body-text";

interface Props {
  height: string; 
}

const MainButtonContainer = styled(BodyText as any)<Props>`
  width: 100%;
  height: ${props => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer; 
`;

export default MainButtonContainer;
