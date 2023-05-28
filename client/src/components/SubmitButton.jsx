import React from "react";

function SubmitButton() {
  return (
    <button
      type="submit"
      className=" mx-auto relative w-10 flex justify-center py-1.5 px-20 mobile:px-14 border border-transparent text-md font-semibold rounded-md text-black bg-neutral-300 hover:bg-neutral-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400"
    >
      Submit
    </button>
  );
}

export default SubmitButton;
