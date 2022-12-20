import React, { FC } from "react";
import { SwipeableDrawer } from "@mui/material";

type AnchorDrawerProps = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  element: JSX.Element;
  anchor?: "top" | "left" | "bottom" | "right";
};

const AnchorDrawer: FC<AnchorDrawerProps> = ({ anchor, open, onOpen, onClose, element }) => {
  return (
    <SwipeableDrawer anchor={anchor} open={open} onClose={onClose} onOpen={onOpen}>
      {element}
    </SwipeableDrawer>
  );
};
AnchorDrawer.defaultProps = {
  anchor: "bottom",
};

export default AnchorDrawer;
