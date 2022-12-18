import React, { FC } from "react";
import { Container, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "molecules/Header";

const WrappingCreative: FC = () => {
  return (
    <Container maxWidth="md" sx={{ bgcolor: "black" }}>
      <Header />
      <Grid container spacing={3} marginTop="16px" marginBottom="16px" bgcolor="green">
        <Outlet />
      </Grid>
    </Container>
  );
};

export default WrappingCreative;
