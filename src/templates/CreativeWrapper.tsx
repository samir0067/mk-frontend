import React, { FC } from "react";
import { Container, Grid } from "@mui/material";

interface DrawerTemplateProps {
  main: JSX.Element;
  footer?: JSX.Element;
}

export const CreativeWrapper: FC<DrawerTemplateProps> = ({ main, footer }) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} marginTop="16px" marginBottom="16px">
        <Grid item xs>
          {main}
        </Grid>
        {footer}
      </Grid>
    </Container>
  );
};
