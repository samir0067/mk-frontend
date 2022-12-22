import React, { FC } from "react";
import { Grid, IconButton as MuiIconButton } from "@mui/material";

type IconButtonProps = {
  label: JSX.Element;
  onClick: () => void;
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  size?: "small" | "medium" | "large";
};

export const IconButton: FC<IconButtonProps> = ({ label, color, size, onClick }) => {
  return (
    <Grid item>
      <MuiIconButton size={size} color={color} onClick={onClick}>
        {label}
      </MuiIconButton>
    </Grid>
  );
};

IconButton.defaultProps = {
  color: "primary",
  size: "small",
};
