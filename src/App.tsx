import { useCallback, useState } from "react";
import { Details } from "./types";
import { getNodeDetails } from "./util/apiUtil";
import TreeView from "./components/TreeView";

function App() {
  const [details, setDetails] = useState<Details | null>(null);

  const handleShowDetails = useCallback(async (id: string) => {
    const response = await getNodeDetails(id);
    setDetails(response);
  }, []);

  return (
    <div className="layout">
      <TreeView onShowDetails={handleShowDetails} />
      <div className="preview">
        {details && (
          <>
            <h1>Details</h1>
            <div>
              <b>ID:</b> {details.id}
            </div>
            <div>
              <b>Article number:</b> {details.articleNum}
            </div>
            <div>
              <b>Name:</b> {details.name}
            </div>
            <div>
              <b>Description:</b> {details.description}
            </div>
            <br />
            <img src={details.image} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
