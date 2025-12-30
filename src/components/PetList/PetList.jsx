import { useEffect ,useState } from "react"
import { Link } from "react-router"
import * as petService  from '../../services/petService'


function PetList() {

    const [pets, setPets] = useState([])

    async function getAllPets (){
        try {
            const data = await petService.index()
            setPets(data)
        } catch (err) {
            console.error('Ran into an error: '+ err)
        }
    }

  useEffect(() => {
    getAllPets()
  }, [])

  return (
    <div>
    <Link to={'/pets/new'}>Add Pet</Link>
    <h1>Pet List</h1>
        <div>
            {!pets.length ? (<h2>No Pets Yet</h2>) :
                (<ul>
                    {pets.map(onePet=>
                    <li key={onePet._id}>
                        <Link to={`/pets/${onePet._id}`}>{onePet.name}</Link>
                    </li>)}
                </ul>)}
            </div>
        </div>
  )
}


export default PetList