/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { Grid, List, Paper, Typography } from "@mui/material";
import { CreativeWrapper } from "templates/CreativeWrapper";
import { useNavigate } from "react-router";
import { ContributorListItem } from "molecules/ContributorListItem";
import { Contributor } from "utils/types";
import { Button } from "atoms/Button";
import { useQuery } from "react-query";
import { getCreative } from "services/creativeApi";
import { DisplayHandling } from "organisms/DisplayHandling";
import { css, keyframes } from "@emotion/react";

type CreativeDetailProps = {
  idFocused: string;
};

const CreativeDetail: FC<CreativeDetailProps> = ({ idFocused }) => {
  const navigate = useNavigate();

  const slideInRight = keyframes`
    0% {
      transform: translateX(500px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  `;

  const { isLoading, isError, data: creative } = useQuery(["creative", idFocused], () => getCreative(idFocused));

  if (isLoading) {
    return <DisplayHandling isLoading />;
  } else if (isError) {
    return <DisplayHandling isError />;
  }

  return (
    <CreativeWrapper
      main={
        <Paper
          style={{ padding: 16 }}
          elevation={8}
          css={css`
            animation: ${slideInRight} 400ms ease-in alternate none;
          `}
        >
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Typography variant="h6" paragraph>
                {creative?.data.title}
              </Typography>
              <Typography paragraph>{creative?.data.description}</Typography>
              <Typography paragraph>{creative?.data.content}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={0} style={{ padding: 16 }}>
                <Typography paragraph variant="subtitle2">
                  {`Créé par ${creative?.data.createdBy.firstName} ${creative?.data.createdBy.lastName}`}
                </Typography>
                <Typography paragraph variant="subtitle2">
                  {`Dernière modification le ${new Date(creative?.data.lastModified).toLocaleDateString()}`}
                </Typography>
              </Paper>
              <Paper elevation={2}>
                <List>
                  {creative?.data.contributors.map((contributor: Contributor, index: number) => (
                    <ContributorListItem key={index} primary={`${contributor.firstName} ${contributor.lastName}`} />
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      }
      footer={
        <Grid container item xs={12} justifyContent="center">
          <Button label="Modifier" onClick={() => navigate(`/creative/${creative?.data.id}/edit`)} />
        </Grid>
      }
    />
  );
};

export default CreativeDetail;
