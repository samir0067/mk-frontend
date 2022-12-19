import React, { FC, useEffect, useState } from "react";
import { Creative } from "utils/types";
import { Grid, ListItem, ListItemText, Switch } from "@mui/material";
import { GetContributors } from "molecules/GetContributors";
import { GetFormats } from "molecules/GetFormats";
import { GetTitle } from "molecules/GetTitle";

type CreativeListProps = {
  creatives: Creative[];
  creative: Creative;
  index: number;
  pages: number;
};

const CreativeList: FC<CreativeListProps> = ({ creative, index, creatives, pages }) => {
  const [idSelected, setIdSelected] = useState<string>("");

  useEffect(() => {
    setIdSelected("");
  }, [pages]);

  return (
    <ListItem
      // TODO fixed the button activate or inactivate
      secondaryAction={<Switch checked={creative.enabled} onChange={() => !creative.enabled} />}
      divider={index < creatives.length - 1}
    >
      <ListItemText
        // TODO fixed the display the details of creative element
        onClick={() => setIdSelected(creative.id)}
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
