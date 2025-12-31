import { useEffect,useState } from "react"
import { show } from "../../services/petService"
import { useNavigate , Link , useParams } from "react-router"
import { deletePet } from "../../services/petService"

function PetDetails() {
    const [onePet, setOnePet] = useState(null)
    const {id} = useParams()
    const Navigate = useNavigate()
    
    async function showFcn(id){
        const onePet = await show(id)
        setOnePet(onePet)
    }

    useEffect(() => {
        showFcn(id)
    }, [])

    if(!onePet) return <h1>Loading ...</h1>

  return (
    <div>
        <h1>{onePet.name} Details</h1>
        <div>
            <p>Name: {onePet.name} | Age: {onePet.age} | Breed: {onePet.breed}</p>
            <Link to={`/pets/${onePet._id}/update`}>Update</Link> {''}
            <button onClick={async ()=>{ await deletePet(id); Navigate('/') }}>Delete</button>
        </div>
    </div>
  )
}

export default PetDetails