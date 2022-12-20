import React, { FC } from "react";
import { Creative, Format } from "utils/types";
import { Chip, Grid, GridSize } from "@mui/material";

type GetFormatsProps = {
  creative: Creative;
  xsGrid?: boolean | GridSize;
  marginRightCip?: number;
  colorChip?: "error" | "default" | "primary" | "secondary" | "info" | "success" | "warning";
};

export const GetFormats: FC<GetFormatsProps> = ({ creative, xsGrid, marginRightCip, colorChip }) => {
  return (
    <Grid item xs={xsGrid}>
      {creative.formats.map((format: Format, index: number) => (
        <Chip
          key={index}
          color={colorChip}
          label={`${format.width}x${format.height}`}
          sx={{ marginRight: marginRightCip }}
        />
      ))}
    </Grid>
  );
};

GetFormats.defaultProps = {
  colorChip: "default",
  xsGrid: 6,
  marginRightCip: 8,
};
