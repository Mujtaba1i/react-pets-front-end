import { useEffect,useState } from "react"
import { show } from "../../services/petService"
import { Navigate , Link , useParams } from "react-router"

function PetDetails() {
    const [onePet, setOnePet] = useState(null)
    const {id} = useParams()

    async function showFcn(id){
        const onePet = await show(id)
        setOnePet(onePet)
    }

    useEffect(() => {
        if(id) showFcn(id)
    }, [id])

    if(!id) return <h1>Loading ...</h1>
    if(!onePet) return <h1>Loading ...</h1>

  return (
    <div>
        <h1>{onePet.name} Details</h1>
        <div>
            <p>Name: {onePet.name} | Age: {onePet.age} | Breed: {onePet.breed}</p>
            <Link to={`/pets/${onePet._id}/edit`}>Update</Link> | <Link to={'/'}>Delete</Link>
        </div>
    </div>
  )
}

export default PetDetails