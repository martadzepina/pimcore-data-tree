import { useContext } from "react";
import { DetailContext } from "./DetailsProvider";

const useDetails = () => {
  const detailContext = useContext(DetailContext);

  if (detailContext === undefined) {
    throw new Error(
      "useDetails has to be used within <DetailsContext.Provider>"
    );
  }

  return detailContext;
};

export default useDetails;
