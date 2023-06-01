import { FC, memo } from "react";
import { NodeRendererProps, Tree } from "react-arborist";
import TreeNode from "./TreeNode";
import { TreeData } from "../types";
import { getMockTreeData } from "../util/dataUtils";

interface Props {
  onShowDetails: (is: string) => void;
}

const TreeView: FC<Props> = memo(({ onShowDetails }) => {
  const data = getMockTreeData();

  return (
    <div>
      <Tree
        data={data}
        openByDefault={false}
        className="tree"
        width={300}
        height={innerHeight - 40}
        rowHeight={35}
        padding={15}
        overscanCount={10}
        disableDrag
        rowClassName="tree-row"
      >
        {(props: NodeRendererProps<TreeData>) => {
          return <TreeNode {...props} onShowDetails={onShowDetails} />;
        }}
      </Tree>
    </div>
  );
});

export default TreeView;
