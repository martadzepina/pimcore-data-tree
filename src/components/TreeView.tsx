import { FC } from "react";
import { Tree } from "react-arborist";
import { getMockTreeData } from "../util/dataUtils";
import TreeNode from "./TreeNode";

const TreeView: FC = () => {
  const data = getMockTreeData();

  return (
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
      {TreeNode}
    </Tree>
  );
};

export default TreeView;
