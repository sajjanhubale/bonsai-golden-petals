import { Card, Grid } from "@mui/material";
import React from "react";
import "../css/Comp.css";
import CoverImage from "../images/Cover.png";

export default function HomeCover() {
  return (
    <div>
      <Grid container className="coverContainer">
        <Grid item xs={6}>
          <div className="coverTitle">Golden Petals Bonsai & Artistry</div>
          <div className="coverHelpText">
            Where art and nature come together
          </div>
          <div className="coverDetails">
            Welcome to Golden Petals Bonsai & Arts, where art and nature come
            together. Our passion is to bring the beauty of bonsai and art into
            homes and offices, providing a serene and calming environment. We
            offer a wide variety of hand-selected bonsai trees and artistic
            pieces, each with its unique character and style. We are always
            available to assist with selecting the perfect piece for your space
            and providing ongoing care instructions. Visit us today and discover
            the beauty of bonsai and art for yourself. We look forward to help
            you find the perfect piece to peace and serenity to your space.
          </div>
        </Grid>
        <Grid item xs={6}>
          <img className="coverImage" src={CoverImage} />
        </Grid>
      </Grid>
    </div>
  );
}
