
import './App.css'
import Contactar from "./components/Contactar_templ" 
import Encabezado from './components/Encabezado';
import Inicio from './components/Inicio';
import SobreNosotros from './components/SobreNosotros';
import Eventos from './components/Eventos';
import { Route,BrowserRouter, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
    <div className='divHeader'>
      <Contactar></Contactar>
      <Encabezado></Encabezado>
    </div>
      
      <Routes>
        <Route exact path='/' element={<Inicio/>}/>
        <Route path='/sobreNosotros' element={<SobreNosotros/>}/>
        <Route path='/eventos' element={<Eventos/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
