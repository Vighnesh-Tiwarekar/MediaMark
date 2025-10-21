import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { login_check } from "../services/authcheck"


export const useAuth = () => {
    
    return useQuery({
        queryKey: ['user'],
        queryFn: login_check,
        staleTime: Infinity
    })

}