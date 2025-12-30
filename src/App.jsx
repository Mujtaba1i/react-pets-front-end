import './App.css'
import { useState,useEffect } from 'react'
import * as petService  from './services/petService'
import PetList from './components/PetList/PetList'
import { Navigate,Route,Routes } from 'react-router'

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
      </Routes>
    </div>
  )
}

export default App