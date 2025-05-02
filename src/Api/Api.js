import axios from "axios";  
export const MainApi = axios.create({
    baseURL:"'https://fakestoreapi.com/products'",
})
