import { useState,useEffect } from 'react'
import { Route,Routes } from 'react-router'
import PetList from './components/PetList/PetList'
import PetDetails from './components/PetDetails/PetDetails'
import * as petService  from './services/petService'
import './App.css'

function App() {
  
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
      <h1>HELP!</h1>
      <Routes>
        <Route path='/' element={<PetList pets={pets}/>}/>
        <Route path='/pets/:id' element={<PetDetails/>}/>
      </Routes>
    </div>
  )
}

export default App