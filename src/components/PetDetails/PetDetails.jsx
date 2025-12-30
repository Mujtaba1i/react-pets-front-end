import { useEffect,useState } from "react"
import { show } from "../../services/petService"
import { useParams } from "react-router"

function PetDetails() {
    const [onePet, setOnePet] = useState(null)
    const {id} = useParams()

    async function showFcn(id){
        const onePet = await show(id)
        setOnePet(onePet)
    }

    useEffect(() => {
        showFcn(id)
    }, [id])

    // if(!id) return <h1>Loading ...</h1>
    if(!onePet) return <h1>Loading ...</h1>

  return (
    <div>
        <h1>Pet Details</h1>
        <div>
            <p>Name: {onePet.name} | Age: {onePet.age} | Breed: {onePet.breed}</p>
        </div>
    </div>
  )
}

export default PetDetails