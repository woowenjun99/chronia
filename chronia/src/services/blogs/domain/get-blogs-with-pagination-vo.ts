import type { Blog } from "./blog";

export interface GetBlogsWithPaginationVO {
  blogs: Blog[];
  total: number;
}
