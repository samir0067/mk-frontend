import React, { FC } from "react";
import { Grid, Pagination as MuiPagination } from "@mui/material";

export const Pagination: FC = () => {
  return (
    <Grid container marginTop="16px" justifyContent="center">
      <Grid item>
        <MuiPagination count={10} />
      </Grid>
    </Grid>
  );
};
