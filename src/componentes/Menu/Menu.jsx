import { Link } from 'react-router-dom'
import './menu.css'

function Menu() {
    return (
        <nav className="navbar navbar-expand-lg bg">
            <div className="container-fluid">
                
                <ul className="navbar-nav"> 
                <li className="nav-item">
                            <Link className="nav-link navegacao efeito-menu" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navegacao efeito-menu" to="/Formulario">Formulário</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navegacao efeito-menu" to="/NaoRespondidos">Pedidos em aberto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navegacao efeito-menu" to="/Respondidos">Pedidos respondidos</Link>
                        </li>

                    </ul>
             
            </div>
        </nav>




    )
}

export default Menu