import { useMutation, useQueryClient } from "react-query";
import { UserCreationDto } from "types";
import { ClientApi } from "../clientApi";
import { API_ENDPOINTS, QUERY_KEYS } from "config";

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (useCreationDto: UserCreationDto) => {
      return ClientApi.post(API_ENDPOINTS.createUser(), useCreationDto);
    },
    {
      onSuccess: () => {
        console.log("## useCreateUser - onSuccess() ");
      },
      onError: () => {
        console.log("## useCreateUser - onError() ");
      },
      onSettled: () => {
        void queryClient.invalidateQueries([QUERY_KEYS.USERS]);
      },
    },
  );
};
