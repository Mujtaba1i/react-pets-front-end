import axios from 'axios'
const BASE_URL = `${import.meta.env.VITE_API_URL}/pets`


async function index (){
    try {
        const response = await axios.get(BASE_URL)
        return response.data.allPets
    } catch (err) {
        console.error('Ran into an error: '+ err)
    }
}

async function show(id){
    try {
        const response = await axios.get(`${BASE_URL}/${id}`)
        return response.data.onePet
    } catch (err) {
        console.error('Ran into an error: '+ err)
    }
}

async function deletePet(id){
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`)
    } catch (err) {
        console.error('Ran into an error: '+ err)
    }
}

async function create(pet){
    try {
        const response = await axios.post(`${BASE_URL}`,pet)
        return response.data.newPet
    } catch (err) {
        // console.error('Ran into an error: '+ err)
        throw new Error(err)
    }
}

export {index,show,deletePet,create}