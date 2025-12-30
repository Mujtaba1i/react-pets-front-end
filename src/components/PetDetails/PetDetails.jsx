import { show } from "../../services/petService"

function PetDetails() {
    const onePet = show()

  return (
    <div>
        <h1>Pet Details</h1>
        <div>
            <p>Name: {onePet.name}, Age: {onePet.age}, Breed: {onePet.breed}</p>
        </div>
    </div>
  )
}

export default PetDetails