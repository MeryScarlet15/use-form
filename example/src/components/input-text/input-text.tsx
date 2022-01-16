import React, { useState, useRef, useEffect } from "react";
import InputTextContainer from "./input-text-style";
import { useDetectPlatform } from "../../hooks/useDetectDesktop/use-detect-platform";
import Cleave from 'cleave.js/react'
import Svg from "../svg/svg";
import LabelText from "../text/label-text/label-text";

interface InputTextProps {
  label?: string;
  value?: string;
  errorText?: string;
  placeholder?: string;
  type?: string;
  format?: any;
  icon?: {
    left?: string;
    right?: string;
  };
  events?: {
    onChange?: (event: any) => void;
    onBlur?: (event: any) => void;
    onFocus?: (event?: any) => void;
  };
  disabled?: boolean;
}

const useLabelAnimation = (initialValue: boolean, format?: boolean) => {
  const [isInputActive, setIsInputActive] = useState<boolean>(initialValue);
  const inputRef = useRef(null);
  const { platform } = useDetectPlatform({ maxMobile: 480 });

  const changeIsInputActive = (show: boolean) => {
    setIsInputActive(show);
    if (show) {
      if (format) {
        inputRef?.current.childNodes[0].focus();
      }
      inputRef?.current.focus();

      if (platform === "mobile") {
        const scrollElement =
          window.document.scrollingElement ||
          window.document.body ||
          window.document.documentElement;

        const windowHeight = window.innerHeight;
        const input: any = inputRef?.current;
        const inputTopScroll = input?.offsetTop;
      }
    }
  };

  return {
    isInputActive,
    changeIsInputActive,
    inputRef,
  };
};

const useInputValue = (initialValue: string) => {
  const [inputValue, setInputValue] = useState<string>(initialValue);

  const changeInputValue = (newInputValue: string) => {
    setInputValue(newInputValue);
  };

  return {
    inputValue,
    changeInputValue,
  };
};

const useInputText = (props: InputTextProps) => {
  const { value, events, disabled, label, format } = props;
  const { isInputActive, changeIsInputActive, inputRef } = useLabelAnimation(
    label ? (value ? true : false) : true,
    format,
  );
  const { inputValue, changeInputValue } = useInputValue(value || "");

  useEffect(() => {
    changeInputValue(value)
  }, [value])

  const handleChange = (event: any) => {
    changeInputValue(event.target.value);

    if (label) {
      // if (!event.target.value) {
      //   changeIsInputActive(false);
      // }
    }

    if (events?.onChange) {
      events.onChange(event);
    }
  };

  const handleBlur = (event: any) => {
    changeInputValue(event.target.value);

    if (label) {
      if (!event.target.value) {
        changeIsInputActive(false);
      }
    }

    if (events?.onBlur) {
      events.onBlur(event);
    }
  };

  return {
    handleChange,
    handleBlur,
    isInputActive,
    changeIsInputActive,
    inputRef,
    inputValue,
  };
};

const InputText: React.FC<InputTextProps> = (props: InputTextProps) => {
  const {
    label,
    value,
    errorText,
    icon,
    events,
    disabled,
    placeholder,
    type,
    format,
  } = props;
  const {
    handleChange,
    handleBlur,
    isInputActive,
    changeIsInputActive,
    inputRef,
    inputValue,
  } = useInputText(props);

  return (
    <InputTextContainer
      className={`${disabled ? "disabled" : ""} ${errorText ? "error" : ""}`}
    >
      {label && (
        <LabelText className="input-text-label">
          <label>{label}</label>
        </LabelText>
      )}
      <div className="input-text-wrapper">
        {icon && icon.left && (
          <div className="input-text-icon-left">
            <Svg src={icon.left} />
          </div>
        )}

        <div
          className={`input-text-container active`}
        >
          <div className="input-text">
            {!format ? (
              <input
                aria-label={label || "input-text-label"}
                ref={inputRef}
                value={inputValue}
                disabled={disabled}
                onChange={(event: any) => handleChange(event)}
                onBlur={(event: any) => handleBlur(event)}
                placeholder={placeholder}
                type={type}
              />
            ) : (
              <div ref={inputRef} className="formatted-input-text">
                <Cleave
                  aria-label={label || "input-text-label"}
                  value={inputValue}
                  disabled={disabled}
                  onChange={(event: any) => handleChange(event)}
                  onBlur={(event: any) => handleBlur(event)}
                  placeholder={placeholder}
                  type={type}
                  options={format}
                />
              </div>
            )}
          </div>
        </div>
        {icon && icon.right && (
          <div className="input-text-icon-right">
            <Svg src={icon.right} />
          </div>
        )}
      </div>

      {errorText && (
        <div className="input-text-error">
          <p>{errorText}</p>
        </div>
      )}
    </InputTextContainer>
  );
};

export default InputText;
