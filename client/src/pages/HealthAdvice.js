import React from "react";
import MenuBar from "../components/MenuBar";
import PageTitle from "../components/PageTitle";
import ChanceCard from "../components/healthAdvice/ChanceCard";
import AdviceCard from "../components/healthAdvice/AdviceCard";
import { useAPI } from "../services/APIService";

function HealthAdvicePage() {
  const { ginaRecord } = useAPI();

  return (
    <div
      className="mx-auto max-w-3xl min-h-screen mobile:px-4 mobile:text-xs tablet:text-md tablet:px-20 tabletxs:px-8
      py-5 px-32 bg-gradient-to-br shadow-gray-600 bg-purple-200 items-center"
    >
      <MenuBar textColor={"text-slate-800"} />

      <PageTitle title={"Health Advice"} />

      <div className="flex gap-4 mt-10">
        <ChanceCard label="Current chance of asthma exacerbation" value={ginaRecord[0]?.status} />
        <ChanceCard label="Previous chance of asthma exacerbation" value={ginaRecord[1]?.status} />
      </div>
      <AdviceCard />
    </div>
  );
}

export default HealthAdvicePage;
