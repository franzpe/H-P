import React, { FC } from 'react';
import { Controller, ControllerProps } from 'react-hook-form';
import Input, { InputProps } from './Input';

type Props = InputProps & Omit<ControllerProps<'input'>, 'render' | 'as'>;

const ControllerInput: FC<Props> = ({
  name,
  control,
  onBlur: onInputBlur,
  onChange: onIpnutChange,
  defaultValue,
  rules,
  onFocus,
  ref,
  ...restInputProps
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      onFocus={onFocus}
      render={({ onBlur, onChange, ...restRenderProps }) => (
        <Input
          onBlur={(e: any) => {
            onBlur();
            if (onInputBlur) {
              onInputBlur(e);
            }
          }}
          onChange={e => {
            onChange(e.currentTarget.value);
            if (onIpnutChange) {
              onIpnutChange(e);
            }
          }}
          {...restRenderProps}
          {...(restInputProps as any)}
        />
      )}
    />
  );
};

export default ControllerInput;
