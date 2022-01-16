import styled from "styled-components";
import { colors } from "../../assets/colors/colors";

const InputTextContainer = styled.div`
  width: 100%;

  .input-text-label {
    color: ${colors.lightGrey};
    font-weight: 600;
    margin-bottom: 8px;
  }

  .input-text-wrapper {
    border-radius: 4px;
    height: 48px;
    padding: 0 16px;
    background: ${colors.background};
    display: flex;
    align-items: center;

    .input-text-icon-left {
      width: 16px;
      height: 16px;
      min-width: 16px;
      min-height: 16px;
      max-width: 16px;
      max-height: 16px;
      margin-right: 16px;
    }

    .input-text-container {
      cursor: text;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 100%;

      &.active {
        .input-text {
          max-height: 24px;
        }
      }
    }

    .input-text-label {
      cursor: text;
      width: 100%;
      transition: 0.3s all ease-in-out;
    }

    .input-text {
      width: 100%;
      height: 100%;
      transition: 0.3s all ease-in-out;
      overflow: hidden;
      max-height: 0;
      min-height: 0;
      color: #fff;

      .formatted-input-text {
        height: 100%;
      }
      input {
        width: 100%;
        height: 100%;
        font-size: 16px;
        color: ${colors.midGrey}; 

        &::placeholder {
          color: ${colors.midGrey};
        }
      }
    }

    .input-text-icon-right {
      width: 16px;
      height: 16px;
      min-width: 16px;
      min-height: 16px;
      max-width: 16px;
      max-height: 16px;
      margin-left: 16px;
    }
  }

  .input-text-error {
    width: 100%;
    padding-left: 16px;
    margin-top: 8px;
    font-family: "Roboto Medium";
    font-size: 12px;
    line-height: 16px;
    color: #A1B4C4;
  }

  &.disabled {
    .input-text-wrapper {
      .input-text-container {
        cursor: auto;
      }

      .input-text-label {
        color: #A1B4C4;
      }

      .input-text {
        color: #A1B4C4;

        input {
          color: #A1B4C4;
        }
      }
    }
  }

  &.error {
    .input-text-wrapper {
      background: #EEE;

      .input-text-label {
        color: #D44B50;
      }

      .input-text-icon-left {
        svg {
          rect {
            fill: #D44B50;
          }

          path {
            fill: #D44B50;
          }
        }
      }

      .input-text-icon-right {
        svg {
          rect {
            fill: #D44B50;
          }

          path {
            fill: #D44B50;
          }
        }
      }
    }
  }
`;

export default InputTextContainer;
