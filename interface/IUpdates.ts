import ICard from "./ICard";

export default interface IUpdate {
  type: "leetcode" | "blog";

  recent: Array<ICard>;
}
