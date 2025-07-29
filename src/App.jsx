import { Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './views/Home';
//import Login from './views/Login'
import Save from './views/Save';
import User from './views/User';
import PersonalInformation from './views/PersonalInformation';
import Notification from './views/Notification';
import FlayerDetalle from "./views/FlayerDetalle";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/guardado" element={<Save />} />
        <Route path="/usuario" element={<User />} />
        <Route path="/informacion_personal" element={<PersonalInformation />} />
        <Route path="/notificaciones" element={<Notification />} />
        <Route path="/flayer/:slug" element={<FlayerDetalle />} />
      </Routes>
    </>
  )
}

export default App
