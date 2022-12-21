import React, { FC } from "react";
import { Container, Grid } from "@mui/material";
import { Header } from "molecules/Header";

interface DrawerTemplateProps {
  main: JSX.Element;
  footer?: JSX.Element;
  displayHeader?: boolean;
}

export const CreativeWrapper: FC<DrawerTemplateProps> = ({ main, footer, displayHeader }) => {
  return (
    <Container maxWidth="lg">
      {displayHeader && <Header />}
      <Grid container spacing={3} marginTop="16px" marginBottom="16px">
        <Grid item xs>
          {main}
        </Grid>
        {footer}
      </Grid>
    </Container>
  );
};
