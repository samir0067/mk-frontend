import React, { FC } from "react";
import { Container, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "molecules/Header";

const Creatives: FC = () => {
  return (
    <Container maxWidth="md">
      <Header />
      <Grid container spacing={3} marginTop="16px" marginBottom="16px">
        <Outlet />
      </Grid>
    </Container>
  );
};

export default Creatives;
