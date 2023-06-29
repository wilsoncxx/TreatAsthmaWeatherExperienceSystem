import React from "react";
import { Divider } from "@mui/material";

function recordLegend() {
  return (
    <div className="flex flex-row text-sm mobile:text-xs rounded-md my-4 py-3 mobile:py-2 px-2 mx-auto justify-between items-center space-x-3">
      <div className="">Date Time</div>
      <Divider
        orientation="vertical"
        flexItem
        className="bg-black bg-opacity-50"
      />
      <div className="text-sm mobile:text-xs">Asthma Status</div>
      <Divider
        orientation="vertical"
        flexItem
        className="bg-black bg-opacity-50"
      />
      <div className="">Weather</div>
      <Divider
        orientation="vertical"
        flexItem
        className="bg-black bg-opacity-50"
      />
      <div className="text-center">Air Quality</div>
    </div>
  );
}

export default recordLegend;
