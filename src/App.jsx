import { Route,Routes } from 'react-router'
import PetList from './components/PetList/PetList'
import PetDetails from './components/PetDetails/PetDetails'
import NewPet from './components/NewPet/NewPet'
import UpdatePet from './components/UpdatePet/UpdatePet'
import './App.css'

function App() {

  return (
    <div>
      <h1>HELP!</h1>
      <Routes>
        <Route path='/' element={<PetList/>}/>
        <Route path='/pets/:id' element={<PetDetails/>}/>
        <Route path='/pets/new/' element={<NewPet/>}/>
        <Route path='/pets/:id/update' element={<UpdatePet/>}/>
      </Routes>
    </div>
  )
  
}

export default App