import { useState } from "react"
import { create } from "../../services/petService"
import { useNavigate } from "react-router"

function PetForm() {

    const Navigate = useNavigate()

    const [form, setForm] = useState({
        name: '',
        age: 0,
        breed: ''
    })

    function handleChange(event){
        setForm({...form, [event.target.name]: event.target.value})
    }


    async function handleSubmit(event){
        event.preventDefault()
        try {
            const payload = {...form}
            payload.age = Number(payload.age)
            await create(payload) 
            Navigate('/')
        } catch (err) {
            console.error('Ran into an error: '+ err)
        }
    }

  return (

    <div>
        <h3>Create</h3>
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Name: </label>
            <input name="name" id="name" type="text" onChange={handleChange} value={form.name}/><br /><br />
            <label htmlFor="age">Age: </label>
            <input name="age" id="age" type="number" min={0} onChange={handleChange} value={form.age}/><br /><br />
            <label htmlFor="breed">Breed: </label>
            <input name="breed" id="breed" type="text" onChange={handleChange} value={form.breed}/><br /><br />
            
            <button type="submit">Create</button>
        </form>
    </div>
    
  )
}

export default PetForm