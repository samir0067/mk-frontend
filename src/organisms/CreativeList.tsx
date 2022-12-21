import React, { FC } from "react";
import { Creative } from "utils/types";
import { Grid, ListItem, ListItemText, Switch } from "@mui/material";
import { Contributors } from "molecules/Contributors";
import { Formats } from "molecules/Formats";
import { Title } from "molecules/Title";
import { updateCreative } from "services/creativeApi";
import { useMutation, useQueryClient } from "react-query";

type CreativeListProps = {
  creatives: Creative[];
  creative: Creative;
  index: number;
  idFocused: string;
  setIdFocused: (id: string) => void;
};

const CreativeList: FC<CreativeListProps> = ({ creative, index, creatives, idFocused, setIdFocused }) => {
  const queryClient = useQueryClient();

  const updateSwitchMutation = useMutation(
    (updatedCreative: Creative) => updateCreative(updatedCreative, creative.id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("creatives").then(() => console.log("Invalidates cache and re fetch"));
      },
    },
  );

  const handleIdFocused = () => {
    setIdFocused(idFocused === creative.id ? "" : creative.id);
  };

  return (
    <ListItem
      secondaryAction={
        <Switch
          checked={creative.enabled}
          onChange={() => updateSwitchMutation.mutate({ ...creative, enabled: !creative.enabled })}
        />
      }
      divider={index < creatives.length - 1}
    >
      <ListItemText
        onClick={handleIdFocused}
        primary={
          <Grid container spacing={1} sx={{ cursor: "pointer" }}>
            <Title idFocused={idFocused} id={creative.id} primary={creative.title} />
            <Contributors creative={creative} />
            <Formats creative={creative} />
          </Grid>
        }
      />
    </ListItem>
  );
};

export default CreativeList;
