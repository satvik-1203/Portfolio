import IBlog from "./IBlogs";
import ICard from "./ICard";

type IUpdate = Leetcode | Blog;

interface Leetcode {
  type: "leetcode";
  recent: ICard[];
}

interface Blog {
  type: "blog";
  recent: IBlog[];
}

export default IUpdate;
