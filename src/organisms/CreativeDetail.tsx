import React, { FC } from "react";
import { Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";
import { creatives } from "utils/dataMock";
import { Person } from "@mui/icons-material";

const CreativeDetail: FC = () => {
  return (
    <Grid item xs={12}>
      <Paper style={{ padding: 16 }} elevation={8}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Typography variant="h6" paragraph>
              {creatives[1].title}
            </Typography>
            <Typography paragraph>{creatives[1].description}</Typography>
            <Typography paragraph>{creatives[1].content}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={0} style={{ padding: 16 }}>
              <Typography paragraph variant="subtitle2">
                Créé par Francis Nolastname
              </Typography>
              <Typography paragraph variant="subtitle2">
                Dernière modification le 1 novembre 2021
              </Typography>
            </Paper>

            <Paper elevation={2}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  <ListItemText primary="John Snow" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  <ListItemText primary="Tom Jedusor" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  <ListItemText primary="Marty McFly" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default CreativeDetail;
