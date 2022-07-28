import { Link } from 'react-router-dom'
import './menu.css'

function Menu() {
    return (
        <nav class="navbar navbar-expand-lg bg">
            <div class="container-fluid">
                
                <ul class="navbar-nav"> 
                <li class="nav-item">
                            <Link className="nav-link navegacao efeito-menu" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link navegacao efeito-menu" to="/Formulario">Formulário</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link navegacao efeito-menu" to="/NaoRespondidos">Pedidos em aberto</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link navegacao efeito-menu" to="/Respondidos">Pedidos respondidos</Link>
                        </li>

                    </ul>
             
            </div>
        </nav>




    )
}

export default Menu