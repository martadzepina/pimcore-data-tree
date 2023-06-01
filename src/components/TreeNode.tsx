import { FC, PropsWithChildren } from "react";
import { NodeRendererProps } from "react-arborist";
import { TreeData } from "../types";
import { getNodeChildren } from "../util/apiUtil";
import useDetailSubmit from "../store/useDetailSubmit";

const qualityColors = {
  green: "#018749",
  yellow: "#FFC72C",
  red: "#CC0000",
};

type Props = PropsWithChildren<NodeRendererProps<TreeData>>;

const TreeNode: FC<Props> = ({ node, style }) => {
  const { showDetails } = useDetailSubmit();

  const { type, name, qualityState, workflowState } = node.data;

  const button = node.isClosed ? "+" : "-";
  const labelStyle = { color: qualityColors[qualityState] };

  const handleToggle = async () => {
    if (node.isClosed) {
      if (!node.data.isFetched) {
        node.data.isLoading = true;
        node.data.children = await getNodeChildren();
        node.data.isFetched = true;
        node.data.isLoading = false;
      }
      node.open();
    } else {
      node.close();
    }
  };

  const handleFocus = () => {
    showDetails(node.data.id);
  };

  return (
    <div className="node" style={style}>
      {!node.isLeaf && (
        <button className="expand-button" onClick={handleToggle}>
          {button}
        </button>
      )}
      {node.data.isLoading ? (
        <span>loading...</span>
      ) : (
        <span
          onClick={handleFocus}
          style={labelStyle}
        >{`${type} - ${name}, ${workflowState}`}</span>
      )}
    </div>
  );
};

export default TreeNode;
