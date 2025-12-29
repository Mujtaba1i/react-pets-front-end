import axios from 'axios'
const BASE_URL = `${import.meta.env.VITE_API_URL}/pets`


async function index (){
    try {
        const response = await axios.get(BASE_URL)
        return response.data.allPets
    } catch (err) {
        console.error(err)
    }
}

export {index,}