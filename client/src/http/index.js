import axios from "axios"

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}

// token of one of the users - "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJkQGdtYWkuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzU2NjY2NTA1LCJleHAiOjE3NTY3NTI5MDV9.t_fYjy_K8gJTY-HPg03c8bPdT8JdYduLx7lYyFLfYjw" 