import React from 'react'
import MainButton, { MainButtonProps } from '../main-button/main-button';
import ButtonErrorContainer from './button-error-style';

type TButtonErrorHeight = 'small' | 'medium' | 'large';

interface ButtonErrorProps extends MainButtonProps {
  text: string; 
  height?: TButtonErrorHeight;
}

const HEIGHTS: {[key:string]: string} = {
  small: '32px',
  medium: '44px',
  large: '56px'
}

const ButtonError: React.FC<ButtonErrorProps> = (props: ButtonErrorProps) => {
  const {
    id,
    onClick,
    role,
    form,
    height,
    type,
    text
  } = props; 

  const mainButtonProps: MainButtonProps = {
    id,
    onClick,
    role,
    form,
    type,
    height: HEIGHTS[(height || 'medium')] 
  }

  return <MainButton {...mainButtonProps }>
    <ButtonErrorContainer className={type || 'primary'}>
      <p>{text}</p>
    </ButtonErrorContainer>
  </MainButton>
  
}

export default ButtonError;