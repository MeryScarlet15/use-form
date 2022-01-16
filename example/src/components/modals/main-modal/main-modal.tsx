import React from 'react'
import MainModalContainer from './main-modal-style';

export interface IDialogArias {
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  ariaModal: boolean;
  className?: string;
}

interface MainModalProps extends IDialogArias {
  children: any;
}

const MainModal: React.FC<MainModalProps> = (props: MainModalProps) => {
  const {
    ariaLabelledBy,
    ariaDescribedBy,
    ariaModal,
    className
  } = props;

  return <MainModalContainer className="main-modal-container">
    <div
      className={`main-modal ${className || ''}`}
      role="dialog"
      aria-modal={ariaModal || false}
      aria-labelledBy={ariaLabelledBy || undefined}
      aria-describedBy={ariaDescribedBy || undefined}
    >
      {props.children}
    </div>
  </MainModalContainer>
}

export default MainModal;