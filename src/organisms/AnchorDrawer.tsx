import React, { FC, useState } from "react";
import { Grid, SwipeableDrawer } from "@mui/material";
import { Button } from "atoms/Button";
import { useForm } from "react-hook-form";
import { Creative, Format } from "utils/types";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { formatSchema } from "utils/validation";
import { useMutation, useQueryClient } from "react-query";
import { updateCreative } from "services/creativeApi";
import { InputField } from "molecules/InputField";

type AnchorDrawerProps = {
  open: boolean;
  creative: Creative;
  localState: Creative;
  onOpen: () => void;
  onClose: () => void;
  id?: string;
  anchor?: "top" | "left" | "bottom" | "right";
};

const AnchorDrawer: FC<AnchorDrawerProps> = ({ open, id, creative, localState, onOpen, onClose, anchor }) => {
  const queryClient = useQueryClient();
  const [format, setFormat] = useState<Format>({} as Format);

  const handleMutation = useMutation((updatedCreative: Creative) => updateCreative(updatedCreative, id), {
    onSuccess: () => {
      queryClient.invalidateQueries("creative").then(() => console.log("Invalidates cache and re fetch"));
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Format>({
    resolver: yupResolver(formatSchema),
  });

  const addFormat = () => {
    const formatted = creative?.formats.concat(format);
    if (format) handleMutation.mutate({ ...localState, formats: [...formatted] });
    onClose();
    setFormat({} as Format);
  };

  return (
    <SwipeableDrawer anchor={anchor} open={open} onClose={onClose} onOpen={onOpen}>
      <Grid container paddingY={8}>
        <InputField
          id="height"
          label="hauteur"
          type="number"
          onChange={(e) => setFormat({ ...format, width: parseInt(e.target.value) })}
          errors={errors}
          register={register("width")}
        />
        <InputField
          id="width"
          label="largeur"
          type="number"
          onChange={(e) => setFormat({ ...format, height: parseInt(e.target.value) })}
          errors={errors}
          register={register("height")}
        />
        <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
          <Button label="Ajouter" onClick={handleSubmit(addFormat)} />
        </Grid>
      </Grid>
    </SwipeableDrawer>
  );
};
AnchorDrawer.defaultProps = {
  anchor: "bottom",
};

export default AnchorDrawer;
