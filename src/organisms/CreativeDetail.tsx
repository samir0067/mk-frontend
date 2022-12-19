import React, { FC } from "react";
import { Grid, List, Paper, Typography } from "@mui/material";
import { CreativeWrapper } from "templates/CreativeWrapper";
import { useLocation } from "react-router";
import { ContributorListItem } from "molecules/ContributorListItem";
import { Contributor } from "utils/types";
import { ButtonContainer } from "molecules/ButtonContainer";

const CreativeDetail: FC = () => {
  const { state } = useLocation();

  return (
    <CreativeWrapper
      main={
        <Paper style={{ padding: 16 }} elevation={8}>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Typography variant="h6" paragraph>
                {state.title}
              </Typography>
              <Typography paragraph>{state.description}</Typography>
              <Typography paragraph>{state.content}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={0} style={{ padding: 16 }}>
                <Typography paragraph variant="subtitle2">
                  {`Créé par ${state.createdBy.firstName} ${state.createdBy.lastName}`}
                </Typography>
                <Typography paragraph variant="subtitle2">
                  {`Dernière modification le ${new Date(state.lastModified).toLocaleDateString()}`}
                </Typography>
              </Paper>
              <Paper elevation={2}>
                <List>
                  {state.contributors.map((contributor: Contributor, index: number) => (
                    <ContributorListItem key={index} primary={`${contributor.firstName} ${contributor.lastName}`} />
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      }
      footer={<ButtonContainer id={state.id} forDetail />}
    />
  );
};

export default CreativeDetail;
