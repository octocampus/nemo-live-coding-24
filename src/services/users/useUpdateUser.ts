import { useMutation, useQueryClient } from "react-query";
import { UserUpdateDto } from "types";
import { ClientApi } from "../clientApi";
import { API_ENDPOINTS, QUERY_KEYS } from "config";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (updateDto: UserUpdateDto) => {
      return ClientApi.patch(API_ENDPOINTS.updateUser(updateDto.id), updateDto);
    },
    {
      onSuccess: () => {
        console.log("## useUpdateUser - onSuccess() ");
      },
      onError: () => {
        console.log("## useUpdateUser - onError() ");
      },
      onSettled: () => {
        void queryClient.invalidateQueries([QUERY_KEYS.USERS]);
      },
    },
  );
};
