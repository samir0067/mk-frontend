import React, { FC } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Person } from "@mui/icons-material";

type ContributorListProps = {
  primary: string;
};

export const ContributorListItem: FC<ContributorListProps> = ({ primary }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <Person />
      </ListItemIcon>
      <ListItemText primary={primary} />
    </ListItem>
  );
};
