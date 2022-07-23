import Header from '../../componentes/Header/Header'
import image from '../../assets/home.svg'
import imageCoffe from '../../assets/sobre.svg'

import './home.css'

function Home() {
    return (
        <>
            <Header className="header"
                image={image}
                description="duas pessoas segurando um quadro com coração no meio"
            >
                miga meAjuda!
                <form className="row g-3">
                    <div className="col-auto">
                        <label for="staticEmail2" className="visually-hidden">Email</label>
                        <input type="text" className="form-control" id="staticEmail2" value="email@example.com" />
                    </div>
                    <div className="col-auto">
                        <label for="inputPassword2" className="visually-hidden">Password</label>
                        <input type="password" className="form-control" id="inputPassword2" placeholder="Senha" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Entrar</button>
                    </div>
                </form>
            </Header>
            <div className="container">
                <div className="home-apresentacao">
                    <h3>Oi, bem vinda ao miga meAjuda!</h3>
                    <h4>
                        Esta plataforma foi pensada e criada para facilitar a sua vida neste curso.
                        Trata-se de uma ferramenta colaborativa onde você pode submeter
                        seu pedido de ajuda,dúvida ou erro do seu código e aguardar
                        que uma miga da turma responda.
                    </h4>
                    <hr></hr>
                </div>



            </div>
            <div className="home-frase" >
                <img className="home-img" src={imageCoffe} alt="ilustração mulheres sentadas tomando café" />
                <h4>Aqui construimos um lugar seguro e acolhedor para você!</h4>

            </div>



        </>
    )
}

export default Home