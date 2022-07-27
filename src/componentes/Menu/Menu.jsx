import { Link } from 'react-router-dom'
import './menu.css'

function Menu() {
    return (
        <nav class="navbar navbar-expand-lg bg">
            <div class="container-fluid">
                <Link className="nav-link navegacao" to="/">Home</Link>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link className="nav-link navegacao" to="/Formulario">Formulário</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link navegacao" to="/NaoRespondidos">Pedidos em aberto</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link navegacao" to="/Respondidos">Pedidos respondidos</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>




    )
}

export default Menu