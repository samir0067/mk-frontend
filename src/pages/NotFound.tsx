import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "molecules/Header";
import { Button } from "atoms/Button";
import { useNavigate } from "react-router";

const NotFound: FC = () => {
  const navigate = useNavigate();
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
      <Button
        label="Retour à la liste des créations"
        variant="outlined"
        color="warning"
        onClick={() => navigate("/")}
      />
    </Box>
  );
};

export default NotFound;
