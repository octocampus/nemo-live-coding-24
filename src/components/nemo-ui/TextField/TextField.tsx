import React, { ReactNode } from "react";
import clsx from "clsx";
import { AriaTextFieldProps, useTextField } from "@react-aria/textfield";
import style from "./textfield.module.css";
import { useObjectRef } from "@react-aria/utils";

interface TextFieldProps extends AriaTextFieldProps {
  label: string;
  fullWidth?: boolean;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ fullWidth = false, ...props }, ref) => {
    const inputRef = useObjectRef(ref);
    const { label, errorMessage } = props;
    const { labelProps, inputProps, errorMessageProps } = useTextField(
      props,
      inputRef,
    );

    return (
      <div className={style.wrapper}>
        <label className={clsx(style.label)} {...labelProps}>
          {label}
        </label>
        <input
          className={clsx(style.input, fullWidth && style.full_width)}
          {...inputProps}
          ref={inputRef}
        />
        {errorMessage && (
          <div {...errorMessageProps} className={clsx(style.error_msg)}>
            {errorMessage as ReactNode}
          </div>
        )}
      </div>
    );
  },
);
