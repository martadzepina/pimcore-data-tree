import { createContext, useState } from "react";
import { Details, DetailsSubmit } from "../types";
import { getNodeDetails } from "../util/apiUtil";

export const DetailContext = createContext<Details | null | undefined>(
  undefined
);
export const DetailSubmitContext = createContext<DetailsSubmit | undefined>(
  undefined
);

export const DetailProvider = ({ children }: { children: React.ReactNode }) => {
  const [details, setDetails] = useState<Details | null>(null);

  const showDetails = async (id: string) => {
    const response = await getNodeDetails(id);
    setDetails(response);
  };

  return (
    <DetailContext.Provider value={details}>
      <DetailSubmitContext.Provider value={{ showDetails }}>
        {children}
      </DetailSubmitContext.Provider>
    </DetailContext.Provider>
  );
};
