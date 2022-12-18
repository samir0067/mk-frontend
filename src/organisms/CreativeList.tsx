import React, { FC, useEffect, useState } from "react";
import { Avatar, Chip, Grid, List, ListItem, ListItemText, Paper, Switch, Typography } from "@mui/material";
import { Pagination } from "molecules/Pagination";
import { Contributor, Creative, Format } from "utils/types";
import { CreativeWrapper } from "templates/CreativeWrapper";
import { useQuery } from "react-query";
import { getCreatives } from "services/creativeApi";
import { DisplayHandling } from "organisms/DisplayHandling";

const CreativeList: FC = () => {
  const [idSelected, setIdSelected] = useState<string>("");
  const [pages, setPages] = useState<number>(1);

  const { isLoading, isError, data: creatives } = useQuery(["creatives", pages], () => getCreatives(pages, 5));

  useEffect(() => {
    setIdSelected("");
  }, [pages]);

  const handleAvatar = (contributor: Contributor) => {
    const initial = contributor.firstName.charAt(0).concat(contributor.lastName.charAt(0));
    return <Typography>{initial}</Typography>;
  };

  if (isLoading) {
    return <DisplayHandling isLoading />;
  } else if (isError) {
    return <DisplayHandling isError />;
  }

  return (
    <CreativeWrapper
      main={
        <Paper style={{ padding: 16 }} elevation={8}>
          <List>
            {creatives.map((creative: Creative, index: number) => (
              <ListItem
                key={index}
                // TODO fixed the button activate or inactivate
                secondaryAction={<Switch checked={creative.enabled} onChange={() => !creative.enabled} />}
                divider={index < creatives.length - 1}
              >
                <ListItemText
                  // TODO fixed the display the details of creative element
                  onClick={() => setIdSelected(creative.id)}
                  primary={
                    <Grid container spacing={1} sx={{ cursor: "pointer" }}>
                      <Grid item xs={3}>
                        <Typography variant="h6" sx={{ ...(idSelected === creative.id && { fontWeight: "bold" }) }}>
                          {creative.title}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <div style={{ display: "flex" }}>
                          {creative.contributors.map((contributor: Contributor, index: number) => (
                            <Avatar key={index} style={{ marginLeft: -16 }}>
                              {handleAvatar(contributor)}
                            </Avatar>
                          ))}
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        {creative.formats.map((format: Format, index: number) => (
                          <Chip style={{ marginRight: 8 }} key={index} label={format.width + "x" + format.height} />
                        ))}
                      </Grid>
                    </Grid>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      }
      footer={<Pagination pages={pages} onChange={(event, page: number) => setPages(page)} />}
    />
  );
};

export default CreativeList;
