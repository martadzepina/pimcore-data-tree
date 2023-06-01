import DetailPreview from "./components/DetailPreview";
import TreeView from "./components/TreeView";
import { DetailProvider } from "./store/DetailsProvider";

function App() {
  return (
    <DetailProvider>
      <div className="layout">
        <TreeView />
        <DetailPreview />
      </div>
    </DetailProvider>
  );
}

export default App;
