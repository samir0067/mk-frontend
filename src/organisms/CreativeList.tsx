import React, { FC } from "react";
import { Avatar, Chip, Grid, List, ListItem, ListItemText, Pagination, Paper, Switch, Typography } from "@mui/material";
import { creatives } from "utils/dataMock";

const CreativeList: FC = () => {
  return (
    <>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Paper style={{ padding: 16 }} elevation={8}>
          <List>
            {creatives.map((creative, index) => (
              <ListItem
                key={index}
                secondaryAction={<Switch checked={creative.enabled} />}
                divider={index < creatives.length - 1}
              >
                <ListItemText
                  primary={
                    <Grid container spacing={1}>
                      <Grid item xs={3}>
                        <Typography
                          variant="h6"
                          style={{
                            ...(index === 1 ? { fontWeight: "bold" } : {}),
                          }}
                        >
                          {creative.title}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <div style={{ display: "flex" }}>
                          {creative.users.map((user) => (
                            <Avatar key={user} style={{ marginLeft: -16 }}>
                              {user}
                            </Avatar>
                          ))}
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        {creative.formats.map((format) => (
                          <Chip style={{ marginRight: 8 }} key={format} label={format} />
                        ))}
                      </Grid>
                    </Grid>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item>
            <Pagination count={10} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CreativeList;