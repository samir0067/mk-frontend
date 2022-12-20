import React, { FC } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { CreativeWrapper } from "templates/CreativeWrapper";

type DisplayHandlingProps = {
  isLoading?: boolean;
  isError?: boolean;
};

export const DisplayHandling: FC<DisplayHandlingProps> = ({ isLoading, isError }) => {
  return (
    <CreativeWrapper
      main={
        <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
          {isLoading && <CircularProgress />}
          {isError && <Typography variant="h3">{"An error occurred"}</Typography>}
        </Box>
      }
    />
  );
};
