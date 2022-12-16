import React, { FC } from "react";
import { Box, Typography } from "@mui/material";

const NotFound: FC = () => {
  return (
    <Box component="div" display="flex" justifyContent="center" alignItems="center">
      <Typography variant="h1">404</Typography>
    </Box>
  );
};

export default NotFound;
