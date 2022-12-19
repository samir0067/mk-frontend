import React, { FC } from "react";
import { Chip, Grid, IconButton, Paper, Switch, TextField } from "@mui/material";
import { creatives } from "utils/dataMock";
import { Add } from "@mui/icons-material";
import { CreativeWrapper } from "templates/CreativeWrapper";
import { ButtonContainer } from "molecules/ButtonContainer";
import { useLocation, useParams } from "react-router";

const CreativeForm: FC = () => {
  const { id } = useParams();
  const { state } = useLocation();

  console.log("state location ==>", state);
  console.log("id ==>", id);

  return (
    <CreativeWrapper
      main={
        <Paper elevation={8} style={{ padding: 16 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <TextField fullWidth margin="normal" label="Titre" value={creatives[1].title} />
            </Grid>
            <Grid item xs display="flex" justifyContent="end">
              <Grid item>
                <Switch checked />
              </Grid>
            </Grid>
          </Grid>
          <TextField
            margin="normal"
            fullWidth
            multiline
            minRows={3}
            label="Description"
            value={creatives[1].description}
          />
          <TextField margin="normal" fullWidth multiline minRows={10} label="Contenu" value={creatives[1].content} />
          <Grid container spacing={2} alignItems="center">
            {creatives[1].formats.map((format, index) => (
              <Grid key={index} item>
                <Chip label={format} color="primary" />
              </Grid>
            ))}
            <Grid item>
              <IconButton size="small" color="primary">
                <Add />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      }
      footer={<ButtonContainer />}
    />
  );
};

export default CreativeForm;
