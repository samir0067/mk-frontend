import React, { FC } from "react";
import { Grid } from "@mui/material";
import CreativeList from "organisms/CreativeList";
import CreativeDetail from "organisms/CreativeDetail";

const Creatives: FC = () => {
  return (
    <Grid container style={{ marginTop: 16, marginBottom: 16 }} spacing={3}>
      <CreativeList />
      <CreativeDetail />
    </Grid>
  );
};

export default Creatives;
