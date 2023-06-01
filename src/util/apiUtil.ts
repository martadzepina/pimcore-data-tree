import { Details, TreeData } from "../types";
import { getMockTreeData, getRandomNumber } from "./dataUtils";

export const getNodeChildren = (): Promise<TreeData[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(getMockTreeData(1, 2, 0));
    }, 1000);
  });

export const getNodeDetails = (id: string): Promise<Details> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: "name",
        articleNum: getRandomNumber(1, 100),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris magna, ultricies id porttitor in, vestibulum semper libero.",
        image: `https://picsum.photos/300/300?random=${id}`,
      });
    }, 500);
  });
