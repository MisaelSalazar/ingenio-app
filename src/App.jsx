import { Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './views/home';
import Login from './views/Login'
import Save from './views/Save';
import User from './views/User';
import PersonalInformation from './views/PersonalInformation';
import Notification from './views/Notification';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/guardado" element={<Save />} />
        <Route path="/usuario" element={<User />} />
        <Route path="/informacion_personal" element={<PersonalInformation />} />
        <Route path="/notificaciones" element={<Notification />} />
      </Routes>
    </>
  )
}

export default App
