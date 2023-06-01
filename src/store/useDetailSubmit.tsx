import { useContext } from "react";
import { DetailSubmitContext } from "./DetailsProvider";

const useDetailSubmit = () => {
  const detailSubmitContext = useContext(DetailSubmitContext);

  if (!detailSubmitContext) {
    throw new Error(
      "useDetailSubmit has to be used within <DetailSubmitContext.Provider>"
    );
  }

  return detailSubmitContext;
};

export default useDetailSubmit;
