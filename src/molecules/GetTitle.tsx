import React, { FC } from "react";
import { Grid, Typography } from "@mui/material";

type GetTitleProps = {
  idFocused: string;
  id: string;
  primary: string;
};

export const GetTitle: FC<GetTitleProps> = ({ idFocused, id, primary }) => {
  return (
    <Grid item xs={3} paddingRight="8px">
      <Typography variant="h6" sx={{ ...(idFocused === id && { fontWeight: "bold" }) }}>
        {primary}
      </Typography>
    </Grid>
  );
};
