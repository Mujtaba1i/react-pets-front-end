import './App.css'
import { useState,useEffect } from 'react'
import * as petService  from './services/petService';

function App() {
  
  const [pets, setPets] = useState([])

  async function getAllPets (){
    const data = await petService.index()
    console.log(data)
    setPets(data)
  }

  useEffect(() => {
    getAllPets()
  }, [])

  return (
    <div>
      <h1>HELP!</h1>
    </div>
  )
}

export default App