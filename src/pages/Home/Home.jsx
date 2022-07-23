import Header from '../../componentes/Header/Header'
import image from '../../assets/home.svg'
import imageCoffe from '../../assets/sobre.svg'

function Home() {
    return (
        <>
            <Header
                image={image}
                description="duas pessoas segurando um quadro com coração no meio"
            >
                Miga meAjuda!
                <form class="row g-3">
                <div class="col-auto">
                    <label for="staticEmail2" class="visually-hidden">Email</label>
                    <input type="text" class="form-control" id="staticEmail2" value="email@example.com" />
                </div>
                <div class="col-auto">
                    <label for="inputPassword2" class="visually-hidden">Password</label>
                    <input type="password" class="form-control" id="inputPassword2" placeholder="Senha" />
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">Entrar</button>
                </div>
            </form>
            </Header>
            <div>
                <h4>Oi, bem vinda ao miga meAjuda!
                    Ele foi pensado e criado para facilitar a sua vida neste curso.
                    Trata-se de uma ferramenta colaborativa onde você pode submeter
                    seu pedido de ajuda,dúvida ou erro do seu código e aguardar
                    que uma miga da turma responda.
                </h4>
            </div>
            
            <h4>Aqui construimos um lugar seguro e acolhedor para você!</h4>
            <img src={imageCoffe} alt="ilustração mulheres sentadas tomando café" />



        </>
    )
}

export default Home