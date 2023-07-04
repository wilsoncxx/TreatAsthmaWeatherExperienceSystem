import React, { useEffect, useMemo, useState } from "react";
import { useAPI } from "../../services/APIService";

function AdviceCard({ label, value }) {
  const { weather } = useAPI();

  const advice = {
    Rain: ["Wrap a sc blablbalblba", "Wrap a sc blablbalblba"],
  };

  return (
    <div className={`bg-white rounded-xl p-3 font-bold mt-4`}>
      <div className="mb-6 text-center">Health Recommendation for Asthmatic Patients: {weather?.details}</div>

      <div className={`rounded-xl bg-slate-100 px-5 py-3 font-normal flex flex-col gap-3 text-sm`}>
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
