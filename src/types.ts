export interface TreeData {
  id: string;
  type: string;
  name: string;
  qualityState: "green" | "yellow" | "red";
  workflowState: "todo" | "in progress" | "in review" | "done";
  description: string;
  isLoading: boolean;
  isFetched: boolean;
  children?: TreeData[];
}

export interface Details {
  id: string;
  name: string;
  articleNum: number;
  description: string;
  image: string;
}

export interface DetailsSubmit {
  showDetails: (id: string) => void;
}
