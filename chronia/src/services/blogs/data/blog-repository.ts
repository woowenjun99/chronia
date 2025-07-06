import { axiosInstance, BaseResponse } from "@/util/axios-instance";
import type { GetBlogsWithPaginationVO } from "../domain/get-blogs-with-pagination-vo";

export async function getBlogsWithPagination([
  endpoint,
  pageSize,
  pageNo,
]: string[]) {
  const response = await axiosInstance.get<
    null,
    BaseResponse<GetBlogsWithPaginationVO>
  >(endpoint, {
    params: { pageSize, pageNo },
  });
  return response.data.data;
}
