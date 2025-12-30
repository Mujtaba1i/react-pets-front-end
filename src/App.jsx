import { useState,useEffect,useParams } from 'react'
import { Route,Routes } from 'react-router'
import PetList from './components/PetList/PetList'
import PetDetails from './components/PetDetails/PetDetails'
import PetForm from './components/PetForm/PetForm'
import * as petService  from './services/petService'
import './App.css'

function App() {
  



  return (
    <div>
      <h1>HELP!</h1>
      <Routes>
        <Route path='/' element={<PetList/>}/>
        <Route path='/pets/:id' element={<PetDetails/>}/>
        <Route path='/pets/new/' element={<PetForm/>}/>
        <Route path='/pets/:id/edit' element={<PetForm/>}/>
      </Routes>
    </div>
  )
}

export default App