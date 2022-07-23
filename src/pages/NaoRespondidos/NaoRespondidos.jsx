import Header from '../../componentes/Header/Header'
import image from '../../assets/naorespondidos.png'

function NaoRespondidos() {
    return (
        <>
            <Header 
                image={image} 
                description="folha A4 com lista de pedidos"
                >
                Pedidos em aberto
            </Header>
            
            <div class="card w-75">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Button</a>
                </div>
            </div>

            <div class="card w-75">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Button</a>
                </div>
            </div>

            <div class="card w-75">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Button</a>
                </div>
            </div>
            <button type="button" class="btn btn-primary btn-lg">Ver mais</button>
        </>
    )
}

export default NaoRespondidos