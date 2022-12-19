import React, { FC } from "react";
import { Grid, Typography } from "@mui/material";

type GetTitleProps = {
  idSelected: string;
  id: string;
  primary: string;
};

export const GetTitle: FC<GetTitleProps> = ({ idSelected, id, primary }) => {
  return (
    <Grid item xs={3} paddingRight="8px">
      <Typography variant="h6" sx={{ ...(idSelected === id && { fontWeight: "bold" }) }}>
        {primary}
      </Typography>
    </Grid>
  );
};
