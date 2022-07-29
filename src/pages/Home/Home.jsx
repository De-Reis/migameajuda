import Header from '../../componentes/Header/Header'
import image from '../../assets/home.svg'
import imageCoffe from '../../assets/sobre.svg'

import './home.css'

function Home() {
    return (
        <>
            <Header className="header"
                image={image}
                description="duas pessoas segurando um tablet em tamanho grande com coração no meio"
            >
                miga meAjuda!

            </Header>
            <div className="container">
                <div className="home-apresentacao">
                    <h3>Oi, bem vinda ao miga meAjuda!</h3>
                    <h4>
                        Esta plataforma foi pensada e criada para facilitar a sua vida neste curso.
                        Trata-se de uma ferramenta colaborativa onde você pode submeter
                        seu pedido de ajuda, dúvida ou erro do seu código e aguardar
                        que uma miga da turma responda.
                    </h4>
                    <hr></hr>
                </div>



            </div>
            <div className="home-frase" >
                <img className="home-img" src={imageCoffe} alt="ilustração mulheres sentadas tomando café e socializando" />
                <h4>Aqui construimos um lugar seguro e acolhedor para você!</h4>

            </div>



        </>
    )
}

export default Home