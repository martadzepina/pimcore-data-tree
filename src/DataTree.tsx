import Tree from "rc-tree";
import "rc-tree/assets/index.css";
import { mockTreeData } from "./utils";

const DataTree = () => {
  return (
    <Tree
      defaultExpandAll={false}
      expandAction="click"
      height={innerHeight - 45}
      itemHeight={20}
      className="tree"
      treeData={mockTreeData()}
    />
  );
};

export default DataTree;
