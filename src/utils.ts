import { DataNode } from "rc-tree/lib/interface";

export const mockTreeData = (path = "0", level = 3, num = 2000) => {
  const list = [];
  for (let i = 0; i < num; i += 1) {
    const key = `${path}-${i} - tree node name`;
    const treeNode: DataNode = {
      title: key,
      key,
    };

    if (level > 0) {
      treeNode.children = mockTreeData(key, level - 1, 2);
    }

    list.push(treeNode);
  }
  return list;
};
