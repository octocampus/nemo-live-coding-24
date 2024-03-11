import { useMutation, useQueryClient } from "react-query";
import { ClientApi } from "../clientApi";
import { API_ENDPOINTS, QUERY_KEYS } from "config";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (userId: string) => {
      return ClientApi.delete(API_ENDPOINTS.deleteUser(userId));
    },
    {
      onSuccess: () => {
        console.log("## useDeleteUser - onSuccess() ");
      },
      onError: () => {
        console.log("## useDeleteUser - onError() ");
      },
      onSettled: () => {
        void queryClient.invalidateQueries([QUERY_KEYS.USERS]);
      },
    },
  );
};
