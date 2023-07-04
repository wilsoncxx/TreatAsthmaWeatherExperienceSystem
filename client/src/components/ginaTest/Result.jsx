import React from "react";
import { getGinaTestStatusProps } from "../../pages/GinaTest";

function GinaTestResult({ value }) {
  return (
    <div className="mb-10 flex flex-col items-center justify-center w-full flex-1 gap-3">
      <ResultBar min="0" max="15" value={value == 0} content={getGinaTestStatusProps(0)} />
      <ResultBar min="16" max="20" value={value == 1} content={getGinaTestStatusProps(1)} />
      <ResultBar min="21" max="25" value={value == 2} content={getGinaTestStatusProps(2)} />
    </div>
  );
}

export default GinaTestResult;

function ResultBar({ min, max, value, content }) {
  return (
    <div
      className={`flex py-4 justify-between font-bold w-5/6 rounded-md px-4 ${value ? content.color.bg : "bg-white"}`}
    >
      <div>
        {min}-{max}
      </div>
      <div>{content.text}</div>
    </div>
  );
}
