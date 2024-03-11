import {useQuery} from "react-query"
import {UserDto} from "types";
import {ClientApi} from "../clientApi"
import {API_ENDPOINTS, QUERY_KEYS} from 'config'


export const useGetUsers = () => {
    return useQuery<UserDto[]>({
        queryKey: [QUERY_KEYS.USERS],
        queryFn:  () => {
            // const res =  await axios.get("https://cdvvbtvbpavvrituwkca.supabase.co/rest/v1/users", {
            //     headers: {
            //         "apikey": apikey,
            //         "authorization": `Bearer ${apikey}`
            //     }
            // })
            //
            // return res.data

            return ClientApi.get(API_ENDPOINTS.getUsers())
        }
    })
}