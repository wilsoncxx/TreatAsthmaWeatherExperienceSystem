import React, { useState } from "react";
import MenuBar from "../components/MenuBar";
import PageTitle from "../components/PageTitle";
import LineChart from "../components/LineChart";
import { scoreData } from "../constants/Data";

function StatisticsPage() {
  const [ScoreData, setScoreData] = useState({
    labels: scoreData.map((data) => data.dateTime),
    datasets: [
      {
        label: "User's Score",
        data: scoreData.map((data) => data.score),
        backgroundColor: "fuchsia",
        borderColor: "fuchsia",
        tension: 0.5,
      },
    ],
  });

  return (
    <div
      className="mx-auto max-w-3xl min-h-screen mobile:px-4 mobile:text-xs tablet:text-md tablet:px-20 tabletxs:px-8
      py-5 px-32 bg-gradient-to-br shadow-gray-600 bg-purple-200 items-center"
    >
      <MenuBar textColor={"text-slate-800"} />

      <PageTitle title={"Statistics"} />

      <LineChart chartData={ScoreData} />
    </div>
  );
}

export default StatisticsPage;
