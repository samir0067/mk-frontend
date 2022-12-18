import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "molecules/Header";

const NotFound: FC = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="black"
    >
      <Header />
      <Typography variant="h1" color="white">
        404
      </Typography>
    </Box>
  );
};

export default NotFound;
