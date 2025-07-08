import { axiosInstance, BaseResponse } from "@/util/axios-instance";
import type { CreateAccountDTO } from "../domain/create-account-dto";

export async function createAccount(email: string, password: string) {
  const response = await axiosInstance.post<
    CreateAccountDTO,
    BaseResponse<void>
  >("/users/register", { email, password });

  if (!response.data.success) {
    throw new Error(response.data.message);
  }
}
