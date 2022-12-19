import React, { FC, useState } from "react";
import { Creative } from "utils/types";
import { Grid, ListItem, ListItemText, Switch } from "@mui/material";
import { GetContributors } from "molecules/GetContributors";
import { GetFormats } from "molecules/GetFormats";
import { GetTitle } from "molecules/GetTitle";
import { updateCreative } from "services/creativeApi";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router";

type CreativeListProps = {
  creatives: Creative[];
  creative: Creative;
  index: number;
};

const CreativeList: FC<CreativeListProps> = ({ creative, index, creatives }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [idSelected, setIdSelected] = useState<string>("");

  const updateSwitchMutation = useMutation((updatedCreative: Creative) => updateCreative(updatedCreative), {
    onSuccess: () => {
      queryClient.invalidateQueries("creatives").then(() => console.log("Invalidates cache and re fetch"));
    },
  });

  const handleSwitch = () => {
    const switchedCreative = creative;
    switchedCreative.enabled = !creative.enabled;
    updateSwitchMutation.mutate(switchedCreative);
  };

  const handleIdSelected = () => {
    setIdSelected(creative.id);
    navigate(`/creative/${creative.id}`, { state: creative });
  };

  return (
    <ListItem
      secondaryAction={<Switch checked={creative.enabled} onChange={handleSwitch} />}
      divider={index < creatives.length - 1}
    >
      <ListItemText
        onClick={handleIdSelected}
        primary={
          <Grid container spacing={1} sx={{ cursor: "pointer" }}>
            <GetTitle idSelected={idSelected} id={creative.id} primary={creative.title} />
            <GetContributors creative={creative} />
            <GetFormats creative={creative} />
          </Grid>
        }
      />
    </ListItem>
  );
};

export default CreativeList;
