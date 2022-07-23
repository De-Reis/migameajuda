import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Formulario from '../pages/Formulario/Formulario'
import Respondidos from '../pages/Respondidos/Respondidos'
import NaoRespondidos from '../pages/NaoRespondidos/NaoRespondidos'
import Menu from '../componentes/Menu/Menu'

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../componentes/Footer/Footer'


function AplicationRoutes() {
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="Formulario" element={<Formulario/>} />
                <Route path="Respondidos" element={<Respondidos/>} />
                <Route path="NaoRespondidos" element={<NaoRespondidos/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AplicationRoutes
