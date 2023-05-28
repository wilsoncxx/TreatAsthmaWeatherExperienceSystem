import React from "react";
import Divider from "@mui/material/Divider";

function RecordCard({
  dateTime,
  score,
  scoreColor,
  details,
  airQuality,
  aqiColor,
}) {
  return (
    <div className="flex flex-row bg-white text-sm mobile:text-xs rounded-md my-4 py-3 mobile:py-2 px-2 mx-auto justify-between items-center space-x-3">
      <div className="">{dateTime}</div>
      <Divider
        orientation="vertical"
        flexItem
        className="bg-black bg-opacity-50"
      />
      <div className={`text-lg mobile:text-base ${scoreColor}`}>{score}</div>
      <Divider
        orientation="vertical"
        flexItem
        className="bg-black bg-opacity-50"
      />
      <div className="">{details}</div>
      <Divider
        orientation="vertical"
        flexItem
        className="bg-black bg-opacity-50"
      />
      <div className={`text-center ${aqiColor}`}>{airQuality}</div>
    </div>
  );
}

export default RecordCard;
