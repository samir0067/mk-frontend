import React, { FC } from "react";
import mediaKeys from "assets/mediakeys.png";
import { Box } from "@mui/material";

export const Header: FC = () => {
  return (
    <Box component="header" display="flex" justifyContent="center" alignItems="center" marginTop="16px">
      <img src={mediaKeys} alt="logo" />
    </Box>
  );
};
