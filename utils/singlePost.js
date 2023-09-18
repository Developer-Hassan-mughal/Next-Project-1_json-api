import axios from "./axios"

export const singlePost = async (id) => {
    try{
        const {data} = await axios.get(`posts/${id}`)
        return data
    }catch (error){
        console.log(error)
    }
}