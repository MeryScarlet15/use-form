import React from 'react'
import ButtonError from '../../buttons/button-error/button-error';
import BodyText from '../../text/body-text/body-text';
import HeadingElement, { THeadings } from '../../text/heading-element/heading-element';
import Heading3 from '../../text/heading3/heading3';
import Heading4 from '../../text/heading4/heading4';
import MainModal, { IDialogArias } from '../main-modal/main-modal';
import ModalErrorContainer from './modal-error-style';


interface ModalErrorProps {
  onClose: () => void;
  open: boolean;
  title: string;
  description: string;
  className: string;
  headingType: THeadings
}

const ModalError: React.FC<ModalErrorProps> = (props: ModalErrorProps) => {
  const {
    open,
    onClose,
    description,
    className,
    headingType,
    title
  } = props;
  return <ModalErrorContainer className={className}>
    <MainModal
      ariaModal={open}
      className="modal-error-dialog"
    >
      <div className="modal-error-topbar">
        <Heading4 className="modal-error-title">
          <HeadingElement
            heading={headingType}
            text={title || 'Error'}
          />
        </Heading4>

        <div className="modal-close-icon">

        </div>
      </div>

      <div className="modal-error-content">
        <BodyText className="modal-error-description">
          <p>{description}</p>
        </BodyText>

        <div className="modal-error-button">
          <ButtonError
            text="Accept"
            id="modal-error-button"
            height="small"
            onClick={() => onClose()}
          />
        </div>

      </div>
    </MainModal>
  </ModalErrorContainer>
}

export default ModalError;