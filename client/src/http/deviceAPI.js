import React from 'react';
import { $authHost, $host } from './index';
import {jwtDecode} from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

// export const check = async () => {
//     const {data} = await $authHost.post('api/user/auth')
//     return data
// }