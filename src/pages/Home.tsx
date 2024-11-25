import { Grid2 } from "@mui/material";
import React from "react";

export function Home() {
  return (
    <div id="home">
      <div className="jumbotron">JUMBOTRON</div>
      <div className="grid-wrapper">
        <Grid2 container spacing={2}>
          <Grid2 size={6}>item 1</Grid2>
          <Grid2 size={6}>item 2</Grid2>
          <Grid2 size={6}>item 3</Grid2>
          <Grid2 size={6}>item 4</Grid2>
        </Grid2>
      </div>
    </div>
  )
}