import React, { FC, HTMLInputTypeAttribute } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { FieldErrors, FieldName, FieldValues, UseFormRegisterReturn } from "react-hook-form";

type InputFieldProps = {
  id: string;
  label: string;
  type: HTMLInputTypeAttribute;
  onChange: (e: any) => void;
  errors: FieldErrors;
  register: UseFormRegisterReturn<FieldName<FieldValues>>;
  defaultValue?: string;
  isFullWidth?: boolean;
  isMultiline?: boolean;
  minRows?: number;
};

export const InputField: FC<InputFieldProps> = ({
  id,
  label,
  type,
  onChange,
  errors,
  register,
  defaultValue,
  isFullWidth,
  isMultiline,
  minRows,
}) => {
  return (
    <Grid item xs display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <TextField
        {...register}
        fullWidth={isFullWidth}
        id={id}
        margin="normal"
        defaultValue={defaultValue}
        label={label}
        type={type}
        onChange={onChange}
        multiline={isMultiline}
        minRows={minRows}
      />
      {errors[id] && (
        <Typography variant="caption" color="darkred">
          {errors[id]?.message as never}
        </Typography>
      )}
    </Grid>
  );
};
