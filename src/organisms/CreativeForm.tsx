import React, { FC } from "react";
import { Button, Chip, Grid, IconButton, Paper, Switch, TextField } from "@mui/material";
import { creatives } from "utils/dataMock";
import { Add } from "@mui/icons-material";

const CreativeForm: FC = () => {
  return (
    <>
      <Grid item xs={3} />
      <Grid item xs={6}>
        <Paper elevation={8} style={{ padding: 16 }}>
          <Grid container alignItems="center">
            <Grid item xs={8}>
              <TextField margin="normal" label="Titre" value={creatives[1].title} />
            </Grid>
            <Grid item xs container justifyContent="flex-end">
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
            {creatives[1].formats.map((format) => (
              <Grid item>
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
      </Grid>
      <Grid item xs={3} />

      <Grid item xs={3} />
      <Grid item xs={6} container spacing={3} justifyContent="center">
        <Grid item>
          <Button color="primary" variant="contained">
            Sauvegarder
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined">Annuler</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined">Supprimer</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CreativeForm;
