import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import "../css/Comp.css";
import PlantDetails from "./PlantDetailsDialog";
import { useNavigate } from "react-router-dom";
import { withLoadData } from "./HOC/withLoadData";
import { getData } from "../utils/common";

 function PlantList() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [plantDetails, setPlantDetails] = useState({});
  const data = getData();
  const handleOpen = (id) => {
    const details = data.find((item) => item.id === id);
    setIsOpen(true);
    setPlantDetails(details);
  };
  return (
    <Grid container spacing={1}>
      {data.map((item) => (
        <Grid item xs={3}>
          <div className="plantContainer" onClick={() => navigate(`/plant/${item.id}`)}>
            <img
              className="plant"
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
            <div className="plantFooter">
              <Typography gutterBottom variant="h6" component="h6">
                {item.title}
              </Typography>
              <Typography variant="h5" component="h5">
                ${item.price}
              </Typography>
            </div>
          </div>
        </Grid>
      ))}
      <PlantDetails
        details={plantDetails}
        isOpen={isOpen}
        handlePlantDetailsClose={() => setIsOpen(false)}
      ></PlantDetails>
    </Grid>
  );
}

export default withLoadData(PlantList);