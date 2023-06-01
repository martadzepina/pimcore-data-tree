import { TreeData } from "../types";
import { v4 as uuidv4 } from "uuid";

const quantityValues = {
  1: "green",
  2: "yellow",
  3: "red",
} as const;

const workflowValues = {
  1: "todo",
  2: "in progress",
  3: "in review",
  4: "done",
} as const;

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getMockTreeData = (level = 1, num = 5, childNum = 0) => {
  const list = [];
  for (let i = 0; i < num; i += 1) {
    const id = uuidv4();
    const quantity =
      quantityValues[getRandomNumber(1, 3) as keyof typeof quantityValues];
    const workflow =
      workflowValues[getRandomNumber(1, 4) as keyof typeof workflowValues];

    const treeNode: TreeData = {
      id,
      type: "type",
      name: "name",
      quantityState: quantity,
      workflowState: workflow,
      description: "description...",
      isLoading: false,
      isFetched: false,
    };

    if (level > 0 && getRandomNumber(1, 2) === 1) {
      treeNode.children = childNum ? [] : getMockTreeData(level - 1, childNum);
    }

    list.push(treeNode);
  }
  return list;
};
