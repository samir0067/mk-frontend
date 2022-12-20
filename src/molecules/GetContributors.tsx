import React, { FC } from "react";
import { Contributor, Creative } from "utils/types";
import { Avatar, AvatarGroup, Grid, Typography } from "@mui/material";

type GetContributorsProps = {
  creative: Creative;
};

export const GetContributors: FC<GetContributorsProps> = ({ creative }) => {
  const handleAvatar = (contributor: Contributor) => {
    const initial = contributor.firstName.charAt(0).concat(contributor.lastName.charAt(0));
    return <Typography>{initial}</Typography>;
  };

  return (
    <Grid item xs={3} sx={{ display: "flex" }}>
      <AvatarGroup max={5}>
        {creative.contributors.map((contributor: Contributor, index: number) => (
          <Avatar key={index} sx={{ marginLeft: -16 }}>
            {handleAvatar(contributor)}
          </Avatar>
        ))}
      </AvatarGroup>
    </Grid>
  );
};
