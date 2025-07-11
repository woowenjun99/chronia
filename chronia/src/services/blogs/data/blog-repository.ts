import { axiosInstance, BaseResponse } from "@/util/axios-instance";
import type { GetBlogsWithPaginationVO } from "../domain/get-blogs-with-pagination-vo";

export async function getBlogsWithPagination([
  endpoint,
  pageSize,
  pageNo,
  userId,
]: string[]) {
  const response = await axiosInstance.get<
    null,
    BaseResponse<GetBlogsWithPaginationVO>
  >(endpoint, {
    params: { pageSize, pageNo, userId },
  });
  return response.data.data;
}
