import React, { ChangeEvent, FC } from "react";
import { Grid, Pagination as MuiPagination } from "@mui/material";

type PaginationProps = {
  pages: number;
  onChange: (event: ChangeEvent<unknown>, page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({ pages, onChange }) => {
  return (
    <Grid container marginTop="16px" justifyContent="center">
      <Grid item>
        <MuiPagination count={10} page={pages} onChange={onChange} />
      </Grid>
    </Grid>
  );
};
