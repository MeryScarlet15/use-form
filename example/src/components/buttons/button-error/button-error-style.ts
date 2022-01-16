import styled from 'styled-components'
import { colors } from '../../../assets/colors/colors'
import BodyText from '../../text/body-text/body-text'

const ButtonErrorContainer = styled(BodyText)`
  background: ${colors.red};
  width: 100%; 
  height: 100%; 
  border-radius: 4px; 
  color: ${colors.white};
  border: 1px solid ${colors.red};
  transition: 0.2s all ease-in-out;
  display: flex; 
  align-items: center; 
  justify-content: center; 

  &:hover {
    background: ${colors.white};
    color: ${colors.red};
    transition: 0.2s all ease-in-out;
  }

  &.secondary {
    background: ${colors.white};
    color: ${colors.red};
    transition: 0.2s all ease-in-out;

    &:hover {
      background: ${colors.red};
      color: ${colors.white};
      transition: 0.2s all ease-in-out;
    }
  }
`
export default ButtonErrorContainer