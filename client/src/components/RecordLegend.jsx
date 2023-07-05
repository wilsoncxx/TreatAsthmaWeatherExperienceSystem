import React from "react";
import { Divider } from "@mui/material";

function RecordLegend() {
  return (
    <div className="grid grid-cols-4 gap-3 divide-x divide-gray-500 px-2 text-center text-sm mobile:text-xs items-center mt-10">
      <div>Date Time</div>
      <div className="pl-3">Asthma Status</div>
      <div className="pl-3">Weather</div>
      <div className="pl-3">Air Quality</div>
    </div>
  );
}

export default RecordLegend;
