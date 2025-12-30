import { useState,useEffect } from "react"
import { show,update } from "../../services/petService"
import { useNavigate,useParams } from "react-router"

function UpdatePet() {

    const Navigate = useNavigate()
    const {id} = useParams()

    const [form, setForm] = useState(null)

    async function getPetData(id){
        const onePet = await show(id)
        setForm(onePet)
    }

    function handleChange(event){
        setForm({...form, [event.target.name]: event.target.value})
    }

    async function handleSubmit(event){
        event.preventDefault()
        try {
            const payload = {...form}
            payload.age = Number(payload.age)
            await update(id,payload)
            Navigate('/')
        } catch (err) {
            console.error('Ran into an error: '+ err)
        }
    }

    useEffect(() => {
        getPetData(id)
    }, [])

    if(!form) return <h1>Loading ...</h1>

  return (

    <div>
        <h3>Update</h3>
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Name: </label>
            <input name="name" id="name" type="text" onChange={handleChange} value={form.name}/><br /><br />
            <label htmlFor="age">Age: </label>
            <input name="age" id="age" type="number" min={0} onChange={handleChange} value={form.age}/><br /><br />
            <label htmlFor="breed">Breed: </label>
            <input name="breed" id="breed" type="text" onChange={handleChange} value={form.breed}/><br /><br />
            
            <button type="submit" >Update</button>
        </form>
    </div>
    
  )
}

export default UpdatePet