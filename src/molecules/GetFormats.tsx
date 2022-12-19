import React, { FC } from "react";
import { Creative, Format } from "utils/types";
import { Chip, Grid } from "@mui/material";

type GetFormatsProps = {
  creative: Creative;
};

export const GetFormats: FC<GetFormatsProps> = ({ creative }) => {
  return (
    <Grid item xs={6}>
      {creative.formats.map((format: Format, index: number) => (
        <Chip sx={{ marginRight: 8 }} key={index} label={format.width + "x" + format.height} />
      ))}
    </Grid>
  );
};
