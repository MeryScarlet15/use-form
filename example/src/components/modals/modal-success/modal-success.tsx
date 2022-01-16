import React from 'react'
import { colors } from '../../../assets/colors/colors';
import ButtonColor from '../../buttons/button-color/button-color';
import ButtonError from '../../buttons/button-error/button-error';
import BodyText from '../../text/body-text/body-text';
import HeadingElement, { THeadings } from '../../text/heading-element/heading-element';
import Heading4 from '../../text/heading4/heading4';
import MainModal from '../main-modal/main-modal';
import ModalSuccessContainer from './modal-success-style';

interface ModalSuccessProps {
  onClose: () => void;
  open: boolean;
  title: string;
  description: string;
  className: string;
  headingType: THeadings
}

const ModalSuccess: React.FC<ModalSuccessProps> = (props: ModalSuccessProps) => {
  const {
    open,
    onClose,
    description,
    className,
    headingType,
    title
  } = props;
  return <ModalSuccessContainer className={className}>
    <MainModal
      ariaModal={open}
      className="modal-success-dialog"
    >
      <div className="modal-success-topbar">
        <Heading4 className="modal-success-title">
          <HeadingElement
            heading={headingType}
            text={title || 'Error'}
          />
        </Heading4>

        <div className="modal-close-icon">

        </div>
      </div>

      <div className="modal-success-content">
        <BodyText className="modal-success-description">
          <p>{description}</p>
        </BodyText>

        <div className="modal-success-button">
          <ButtonColor
            id="handle-values-button"
            text="Accept"
            height='medium'
            type="primary"
            color={{
              primary: colors.blueMedium,
              secondary: colors.white,
              text: colors.white
            }}
            onClick={() => onClose()}
          />
        </div>

      </div>
    </MainModal>
  </ModalSuccessContainer>
}

export default ModalSuccess;