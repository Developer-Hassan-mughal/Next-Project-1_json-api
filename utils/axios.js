import axios from "axios";

const BD = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})

export default BD