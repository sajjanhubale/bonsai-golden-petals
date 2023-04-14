import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "../css/Comp.css";

export default function PlantDetailsDialog(props) {
  const { isOpen, handlePlantDetailsClose, details } = props;

  return (
    <div>
      <Dialog open={isOpen} onClose={handlePlantDetailsClose}>
        <DialogTitle>{details.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{details.info}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePlantDetailsClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
