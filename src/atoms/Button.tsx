import React, { FC } from "react";
import { Button as MuiButton, Grid } from "@mui/material";

type ButtonProps = {
  label: string;
  onClick: () => void;
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  variant?: "text" | "outlined" | "contained";
};

export const Button: FC<ButtonProps> = ({ label, color, variant, onClick }) => {
  return (
    <Grid item>
      <MuiButton color={color} variant={variant} onClick={onClick}>
        {label}
      </MuiButton>
    </Grid>
  );
};

Button.defaultProps = {
  color: "primary",
  variant: "contained",
};
