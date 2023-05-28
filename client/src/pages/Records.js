import React from "react";
import MenuBar from "../components/MenuBar";
import PageTitle from "../components/PageTitle";
import RecordCard from "../components/RecordCard";

function RecordsPage() {
  return (
    <div
      className="min-h-screen mx-auto max-w-3xl mobile:px-4 mobile:text-xs tablet:text-md tablet:px-20 tabletxs:px-8
      py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-600 bg-purple-200 items-center"
    >
      <MenuBar textColor={"text-slate-800"} />

      <PageTitle title={"GINA Records"} />

      <RecordCard
        dateTime={"2023-2-10 01:52"}
        score={"5"}
        scoreColor={"text-red-600"}
        details={"Uncontrolled Asthma"}
        airQuality={"Moderate (3)"}
        aqiColor={"text-yellow-500"}
      />
      <RecordCard
        dateTime={"2023-2-11 02:34"}
        score={"8"}
        scoreColor={"text-red-600"}
        details={"Uncontrolled Asthma"}
        airQuality={"Good (1)"}
        aqiColor={"text-green-500"}
      />
      {/* <RecordCard
        dateTime={"2023-2-12 03:16"}
        score={"20"}
        details={"Well Controlled Asthma"}
        weather={"Broken Clouds"}
      />
      <RecordCard
        dateTime={"2023-2-13 12:54"}
        score={"15"}
        details={"Well Controlled Asthma"}
        weather={"Moderate Rain"}
      />
      <RecordCard
        dateTime={"2023-2-14 15:57"}
        score={"7"}
        details={"Uncontrolled Asthma"}
        weather={"Clear Sky"}
      />
      <RecordCard
        dateTime={"2023-2-15 17:46"}
        score={"12"}
        details={"Partly Controlled Asthma"}
        weather={"Heavy Rain"}
      /> */}
    </div>
  );
}

export default RecordsPage;
