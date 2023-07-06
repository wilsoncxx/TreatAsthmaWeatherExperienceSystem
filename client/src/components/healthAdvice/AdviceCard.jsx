import React, { useEffect, useMemo, useState } from "react";
import { useAPI } from "../../services/APIService";

function AdviceCard({ label, value }) {
  const { weather } = useAPI();

  const advice = {
    Clouds: [
      "Take your usual dose of reliever inhaler before going out",
      "Put extra care to take your medication as prescribed",
    ],
    Rain: [
      "Wrap a scarf around your nose and mouth loosely",
      "The scarf can prevent airways from being shocked by cold air",
    ],
  };

  return (
    <div className={`bg-white rounded-xl p-3 font-bold mt-4`}>
      <div className="mb-6 text-center">
        Health Recommendation for Asthmatic Patients: {weather?.details}
      </div>

      <div
        className={`rounded-xl bg-slate-100 px-5 py-3 font-normal flex flex-col gap-3 text-sm`}
      >
        {weather?.details &&
          (advice[weather?.details] ?? []).map((v, i) => (
            <div key={i}>
              {i + 1}. {v}
            </div>
          ))}
      </div>
    </div>
  );
}

export default AdviceCard;
