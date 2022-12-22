import React, { FC, useState } from "react";
import { Grid, Paper, Switch } from "@mui/material";
import { Add } from "@mui/icons-material";
import { CreativeWrapper } from "templates/CreativeWrapper";
import { useNavigate, useParams } from "react-router";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteCreative, getCreative, updateCreative } from "services/creativeApi";
import { DisplayHandling } from "organisms/DisplayHandling";
import { Creative } from "utils/types";
import { Button } from "atoms/Button";
import { Formats } from "molecules/Formats";
import AnchorDrawer from "organisms/AnchorDrawer";
import { IconButton } from "atoms/IconButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { creativeSchema } from "utils/validation";
import { InputField } from "molecules/InputField";

const CreativeForm: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [localState, setLocalState] = useState<Creative>({} as Creative);
  const [open, setOpen] = useState<boolean>(false);

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

  const submitUpdate = () => {
    if (localState) updateMutation.mutate(localState);
    setLocalState({} as Creative);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(creativeSchema),
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
                <InputField
                  id="title"
                  label="Titre"
                  type="text"
                  onChange={(e) => setLocalState({ ...localState, title: e.target.value })}
                  errors={errors}
                  register={register("title")}
                  defaultValue={creative?.data.title}
                  isFullWidth={true}
                />
              </Grid>
              <Grid item xs display="flex" justifyContent="end">
                <Switch
                  checked={creative?.data.enabled}
                  onChange={() => handleMutation.mutate({ ...creative?.data, enabled: !creative?.data.enabled })}
                />
              </Grid>
            </Grid>

            <InputField
              id="description"
              label="Description"
              type="text"
              onChange={(e) => setLocalState({ ...localState, description: e.target.value })}
              errors={errors}
              register={register("description")}
              defaultValue={creative?.data.description}
              isFullWidth
              isMultiline
              minRows={3}
            />
            <InputField
              id="content"
              label="Contenu"
              type="text"
              onChange={(e) => setLocalState({ ...localState, content: e.target.value })}
              errors={errors}
              register={register("content")}
              defaultValue={creative?.data.content}
              isFullWidth
              isMultiline
              minRows={10}
            />
            <Grid container spacing={2} alignItems="center">
              <Formats creative={creative?.data} xsGrid={false} marginRightCip={0.2} colorChip="primary" />
              <IconButton label={<Add />} onClick={() => setOpen(true)} />
            </Grid>
          </Paper>
          <AnchorDrawer
            id={id}
            open={open}
            creative={creative?.data}
            localState={localState}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
          />
        </>
      }
      footer={
        <Grid container item xs={12} spacing={3} marginTop="auto" justifyContent="center">
          <Button label="Sauvegarder" onClick={handleSubmit(submitUpdate)} />
          <Button label="Annuler" variant="outlined" onClick={() => navigate(-1)} />
          <Button label="Supprimer" color="error" variant="outlined" onClick={() => deleteMutation.mutate()} />
        </Grid>
      }
    />
  );
};

export default CreativeForm;
