import React, { FC } from "react";
import { Grid } from "@mui/material";
import { Button } from "atoms/Button";
import { useNavigate } from "react-router";

type ButtonContainerProps = {
  id?: string;
  forDetail?: boolean;
};

export const ButtonContainer: FC<ButtonContainerProps> = ({ forDetail, id }) => {
  const navigate = useNavigate();

  return (
    <Grid container item xs={12} spacing={3} marginTop="auto" justifyContent="center">
      {forDetail ? (
        <>
          <Button label="Retour" onClick={() => navigate(-1)} />
          <Button label="Modifier" onClick={() => navigate(`/creative/${id}/edit`)} />
        </>
      ) : (
        <>
          <Button label="Sauvegarder" onClick={() => undefined} />
          <Button label="Annuler" onClick={() => navigate(-1)} />
          <Button label="Supprimer" onClick={() => undefined} />
        </>
      )}
    </Grid>
  );
};

ButtonContainer.defaultProps = {
  forDetail: false,
};
