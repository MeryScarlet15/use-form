import React from "react";
import MainButtonContainer from "./main-button-style";

export type TMainButtonRole = 'link' | 'button'

export interface MainButtonProps {
  id: string;
  onClick?: (event: any) => void;
  height?: string;
  role?: TMainButtonRole;
  form?: string;
  type?: 'primary' | 'secondary';
  children?: any
}

const MainButton: React.FC<MainButtonProps> = (props: MainButtonProps) => {
  const {
    id,
    onClick,
    role,
    form,
    height,
    type
  } = props;

  const handleClick = (event: any) => {
    if (onClick) {
      onClick(event);
    }
  }

  return <MainButtonContainer
    id={id}
    height={height || '100%'}
    role={role || 'button'}
    form={form || ''}
    onClick={(event: any) => handleClick(event)}
    type={type || 'primary'}
  >
    {props.children}
  </MainButtonContainer>
  
};

export default MainButton;
