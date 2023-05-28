import React from "react";

function QuestionCards({ title, header, content }) {
  return (
    <div className="mx-auto w-3/4 tablet:w-4/6 mobile:w-4/6 max-w-sm mobile:min-w-0 bg-white rounded-md my-10 py-6 mobile:pt-4 mobile:pb-2 px-2">
      <div className="-translate-y-9 mobile:-translate-y-7 absolute z-10 text-xl mobile:text-base px-2 bg-neutral-300 rounded-lg uppercase font-semibold">
        {title}
      </div>
      <p className="font-medium">{header}</p>
      <ul className="list-disc font-normal text-xs py-1.5 px-4 mobile:pr-1">
        <li>{content}</li>
      </ul>
      <div className="flex flex-row justify-around pt-2 text-lg mobile:text-base font-medium">
        <label className="w-1/2 pl-16 mobile:pl-8">
          <input
            type="radio"
            value="No"
            name={title}
            defaultChecked
            className="cursor-pointer place-self-center mx-1 h-4 w-4 mobile:h-3 mobile:w-3"
          />
          No
        </label>
        <label className="w-1/2 pl-3">
          <input
            type="radio"
            value="yes"
            name={title}
            className="cursor-pointer mx-1 h-4 w-4 mobile:h-3 mobile:w-3"
          />
          Yes
        </label>
      </div>
    </div>
  );
}

export default QuestionCards;
