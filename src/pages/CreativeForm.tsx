import React, { FC, useState } from "react";
import { Grid, IconButton, Paper, Switch, TextField, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { CreativeWrapper } from "templates/CreativeWrapper";
import { useNavigate, useParams } from "react-router";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteCreative, getCreative, updateCreative } from "services/creativeApi";
import { DisplayHandling } from "organisms/DisplayHandling";
import { Creative, Format } from "utils/types";
import { Button } from "atoms/Button";
import { GetFormats } from "molecules/GetFormats";
import AnchorDrawer from "organisms/AnchorDrawer";
import { useForm } from "react-hook-form";
import { formatSchema } from "utils/validation";
import { yupResolver } from "@hookform/resolvers/yup";

const CreativeForm: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [localState, setLocalState] = useState<Creative>({} as Creative);
  const [open, setOpen] = useState<boolean>(false);
  const [format, setFormat] = useState<Format>({} as Format);

  const { isLoading, isError, data: creative } = useQuery(["creative"], () => getCreative(id));

  const updateMutation = useMutation((updatedCreative: Creative) => updateCreative(updatedCreative, id), {
    onSuccess: () => {
      return queryClient.invalidateQueries("creative").then(() => navigate("/"));
    },
  });

  const handleMutation = useMutation((updatedCreative: Creative) => updateCreative(updatedCreative, id), {
    onSuccess: () => {
      queryClient.invalidateQueries("creative").then(() => console.log("Invalidates cache and re fetch"));
    },
  });

  const deleteMutation = useMutation(() => deleteCreative(id).then(() => navigate("/")));

  const addFormat = () => {
    const formatted = creative?.data.formats.concat(format);
    if (format) handleMutation.mutate({ ...localState, formats: [...formatted] });
    setOpen(false);
    setFormat({} as Format);
  };

  const submitUpdate = () => {
    if (localState) updateMutation.mutate(localState);
    setLocalState({} as Creative);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Format>({
    resolver: yupResolver(formatSchema),
  });

  if (isLoading) {
    return <DisplayHandling isLoading />;
  } else if (isError) {
    return <DisplayHandling isError />;
  }

  return (
    <CreativeWrapper
      main={
        <>
          <Paper elevation={8} style={{ padding: 16 }}>
            <Grid container alignItems="center">
              <Grid item xs>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Titre"
                  defaultValue={creative?.data.title}
                  onChange={(e) => setLocalState({ ...localState, title: e.target.value })}
                />
              </Grid>
              <Grid item xs display="flex" justifyContent="end">
                <Switch
                  checked={creative?.data.enabled}
                  onChange={() => handleMutation.mutate({ ...creative?.data, enabled: !creative?.data.enabled })}
                />
              </Grid>
            </Grid>
            <TextField
              margin="normal"
              fullWidth
              multiline
              minRows={3}
              label="Description"
              defaultValue={creative?.data.description}
              onChange={(e) => setLocalState({ ...localState, description: e.target.value })}
            />
            <TextField
              margin="normal"
              fullWidth
              multiline
              minRows={10}
              label="Contenu"
              defaultValue={creative?.data.content}
              onChange={(e) => setLocalState({ ...localState, content: e.target.value })}
            />
            <Grid container spacing={2} alignItems="center">
              <GetFormats creative={creative?.data} xsGrid={false} marginRightCip={0.2} colorChip="primary" />
              <Grid item>
                <IconButton size="small" color="primary" onClick={() => setOpen(true)}>
                  <Add />
                </IconButton>
              </Grid>
            </Grid>
          </Paper>
          <AnchorDrawer
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            element={
              <Grid container paddingY={8}>
                <Grid item xs display="flex" flexDirection="column" justifyContent="start" alignItems="end">
                  <TextField
                    {...register("width")}
                    id="width"
                    margin="normal"
                    label="largeur"
                    type="number"
                    onChange={(e) => setFormat({ ...format, width: parseInt(e.target.value) })}
                  />
                  {errors["width"] && (
                    <Typography variant="caption" color="darkred">
                      {errors["width"]?.message as never}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs display="flex" flexDirection="column" justifyContent="start" alignItems="start">
                  <TextField
                    {...register("height")}
                    id="height"
                    margin="normal"
                    label="hauteur"
                    type="number"
                    onChange={(e) => setFormat({ ...format, height: parseInt(e.target.value) })}
                  />
                  {errors["height"] && (
                    <Typography variant="caption" color="darkred">
                      {errors["height"]?.message as never}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                  <Button label="Ajouter" onClick={handleSubmit(addFormat)} />
                </Grid>
              </Grid>
            }
          />
        </>
      }
      footer={
        <Grid container item xs={12} spacing={3} marginTop="auto" justifyContent="center">
          <Button label="Sauvegarder" onClick={submitUpdate} />
          <Button label="Annuler" variant="outlined" onClick={() => navigate(-1)} />
          <Button label="Supprimer" color="error" variant="outlined" onClick={() => deleteMutation.mutate()} />
        </Grid>
      }
    />
  );
};

export default CreativeForm;
