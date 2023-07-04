import React from "react";
import Divider from "@mui/material/Divider";
import { getGinaTestStatusProps } from "../pages/GinaTest";

function RecordCard({ record }) {
  let aqiName = "Undefined";
  let aqiColor = "text-white";
  let statusColor = getGinaTestStatusProps(record?.status).color.text;

  switch (record?.aqi) {
    case 1:
      aqiName = "Good (1)";
      aqiColor = "text-green-300";
      break;
    case 2:
      aqiName = "Fair (2)";
      aqiColor = "text-blue-300";
      break;
    case 3:
      aqiName = "Moderate (3)";
      aqiColor = "text-yellow-300";
      break;
    case 4:
      aqiName = "Poor (4)";
      aqiColor = "text-orange-300";
      break;
    case 5:
      aqiName = "Very Poor (5)";
      aqiColor = "text-red-400";
      break;
    default:
      aqiName = "Undefined";
      aqiColor = "text-white";
  }

  const style = { text: "text-sm mobile:text-xs flex items-center justify-center text-center" };

  return (
    <div
      className={`bg-white rounded-md py-3 mobile:py-2 px-2 mx-auto grid grid-cols-4 gap-3 divide-x divide-gray-500`}
    >
      <div className={style.text}>{record?.dateTime}</div>
      <div className={`pl-3 ${style.text} ${statusColor}`}>{getGinaTestStatusProps(record?.status).text}</div>
      <div className={`pl-3 ${style.text}`}>{record?.weather}</div>
      <div className={`pl-3 ${style.text} ${aqiColor}`}>{aqiName}</div>
    </div>
  );
}

export default RecordCard;
