import React, { FC } from "react";
import { Creative } from "utils/types";
import { Grid, ListItem, ListItemText, Switch } from "@mui/material";
import { GetContributors } from "molecules/GetContributors";
import { GetFormats } from "molecules/GetFormats";
import { GetTitle } from "molecules/GetTitle";
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
            <GetTitle idFocused={idFocused} id={creative.id} primary={creative.title} />
            <GetContributors creative={creative} />
            <GetFormats creative={creative} />
          </Grid>
        }
      />
    </ListItem>
  );
};

export default CreativeList;
