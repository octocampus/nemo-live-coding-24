import {useQuery} from "react-query"
import axios from "axios"
import {UserDto} from "types";
import {API_ENDPOINTS} from "config";

const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkdnZidHZicGF2dnJpdHV3a2NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2MzA2MTksImV4cCI6MjAyNTIwNjYxOX0.vIN1UDJXnFMje3eXwPGLBfLnIQA2BxEkw0dq9TIjz7U"


export const useGetUsers = () => {
    return useQuery<UserDto[]>({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axios.get(API_ENDPOINTS.getUsers(), {
                headers: {
                    "apikey": apikey,
                    "authorization": `Bearer ${apikey}`
                }
            })

            return res.data
        }
    })
}