import React from "react";
import MenuBar from "../components/MenuBar";
import PageTitle from "../components/PageTitle";
import QuestionCard from "../components/QuestionCard";
import SubmitButton from "../components/SubmitButton";
import { questions } from "../constants/formFields";

function GinaTest() {
  return (
    <div
      className="mx-auto max-w-3xl min-h-screen mobile:px-4 mobile:text-xs tablet:text-md tablet:px-20 tabletxs:px-8
      py-5 px-32 bg-gradient-to-br shadow-gray-600 bg-purple-200 items-center"
    >
      <MenuBar textColor={"text-slate-800"} />

      <PageTitle title={"GINA Test"} />

      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          title={question.title}
          header={question.header}
          content={question.content}
        />
      ))}

      <SubmitButton />
    </div>
  );
}

export default GinaTest;
