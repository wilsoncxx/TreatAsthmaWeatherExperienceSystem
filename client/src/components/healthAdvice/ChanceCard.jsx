import React, { useMemo } from "react";
import { getGinaTestStatusProps } from "../../pages/GinaTest";

function ChanceCard({ label, value }) {
  const statusProps = getGinaTestStatusProps(value);
  return (
    <div className={`bg-white rounded-xl py-3 mobile:py-4 px-6 mx-auto font-bold`}>
      <div className="mb-4 text-center">{label}</div>
      <div className={`rounded-xl ${statusProps?.color?.bg} px-3 py-2 text-center`}>
        {statusProps.level ?? "-"}
      </div>
    </div>
  );
}

export default ChanceCard;
