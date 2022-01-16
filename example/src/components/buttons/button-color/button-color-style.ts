import styled from 'styled-components'
import BodyText from '../../text/body-text/body-text'

interface Props {
  color: {
    primary: string;
    secondary: string;
    text: string;
  };
}
const ButtonColorContainer = styled(BodyText as any) <Props>`
  background: ${props => props.color.primary};
  width: 100%; 
  height: 100%; 
  border-radius: 4px; 
  color: ${props => props.color.text};
  border: 1px solid ${props => props.color.primary};
  transition: 0.2s all ease-in-out;
  display: flex; 
  align-items: center; 
  justify-content: center; 

  .button-color-icon-left {
    width: 16px; 
    min-width: 16px; 
    max-height: 16px; 
    margin-right: 8px; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    
    svg {
      width: 16px; 
    }

    img {
      width: 16px; 
    }
  }

  .button-color-icon-right {
    width: 16px;
    min-width: 16px;
    max-height: 16px;
    margin-left: 8px; 
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background: ${props => props.color.secondary};
    color: ${props => props.color.primary};
    transition: 0.2s all ease-in-out;
  }

  &.secondary {
    background: ${props => props.color.secondary};
    color: ${props => props.color.text};
    transition: 0.2s all ease-in-out;

    &:hover {
      background: ${props => props.color.primary};
      color: ${props => props.color.primary};
      transition: 0.2s all ease-in-out;
    }
  }
`
export default ButtonColorContainer