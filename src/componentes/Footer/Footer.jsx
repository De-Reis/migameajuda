import { Link } from 'react-router-dom'
import './footer.css'
import imgInstagram from '../../assets/instagram.png'
import imgLinkedin from '../../assets/linkedin.png'
import imgGit from '../../assets/github.png'
import imgTwitter from '../../assets/twitter.png'

function Footer() {
    return (
        <>

            <footer className="footer">
                <div className="footer_principal">
                    <div className="footer_nav">
                        <p className="item">
                            <Link className="link" to="/Formulario">miga meAjuda!</Link>
                        </p>
                    </div>
                        <div class="footer_redes-sociais">
                            <a className="img__redes" href="https://www.instagram.com/denisexreis/?hl=pt-br" target="_blank">
                                <img src={imgInstagram} alt="Íconde do Instagram" />
                            </a>
                            <a className="img__redes" href="https://www.linkedin.com/in/denise-reis-0a643b7b/" target="_blank">
                                <img  src={imgLinkedin} alt="Íconde do Linkedin" />
                            </a>
                            <a className="img__redes" href="https://github.com/De-Reis" target="_blank">
                                <img src={imgGit} alt="Íconde do Github" />
                            </a>
                            <a className="img__redes" href="https://twitter.com/DeniseR71862294" target="_blank">
                                <img src={imgTwitter} alt="Íconde do Twitter" />
                            </a>
                        </div>
                </div>
                <div class="footer_cc">
                    <p>Desenvolvido por Denise Reis | 2022 - Reprograma © Copyright</p>
                </div>
            </footer>

        </>
    )
}

export default Footer