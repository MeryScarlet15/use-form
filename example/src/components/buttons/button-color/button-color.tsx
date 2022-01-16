import React from 'react'
import Svg from '../../svg/svg';
import MainButton, { MainButtonProps } from '../main-button/main-button';
import ButtonColorContainer from './button-color-style';

type TButtonColorHeight = 'small' | 'medium' | 'large';

interface ButtonColorProps extends MainButtonProps {
  text: string;
  height?: TButtonColorHeight;
  color: {
    primary: string;
    secondary?: string;
    text?: string;
  };
  icon?: {
    left?: string;
    right?: string;
  }
}

const HEIGHTS: { [key: string]: string } = {
  small: '32px',
  medium: '44px',
  large: '56px'
}

const isSvg = (imgUrl: string) => {
  const urlSplited = imgUrl.split('.')
  const splitedLenght = urlSplited.length;
  const format = urlSplited[splitedLenght - 1];

  if (format.includes('svg')) {
    return true;
  }

  return false;
}

const ButtonColor: React.FC<ButtonColorProps> = (props: ButtonColorProps) => {
  const {
    id,
    onClick,
    role,
    form,
    height,
    type,
    text,
    color,
    icon
  } = props;

  const mainButtonProps: MainButtonProps = {
    id,
    onClick,
    role,
    form,
    type,
    height: HEIGHTS[(height || 'medium')]
  }

  return <MainButton {...mainButtonProps}>
    <ButtonColorContainer color={{ ...color }} className={type || 'primary'}>
      {icon?.left &&
        <div className="button-color-icon-left">
          {icon?.left && isSvg(icon.left) ? (
            <Svg src={icon.left} />
          ) : (
            <img src={icon.left} alt="button-color-icon-left" />
          )}
        </div>
      }
      <p>{text}</p>

      {
        icon?.right &&
        <div className="button-color-icon-right">
          {icon?.right && isSvg(icon.right) ? (
            <Svg src={icon.right} />
          ) : (
            <img src={icon.right} alt="button-color-icon-right" />
          )}
        </div>
      }
    </ButtonColorContainer>
  </MainButton>

}

export default ButtonColor;