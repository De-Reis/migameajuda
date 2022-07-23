import Header from '../../componentes/Header/Header'
import image from '../../assets/respondidos.png'
import imageCard1 from '../../assets/floki.jpeg'

function Respondidos() {
    return (
        <>
            <Header
                image={image}
                description="balões de conversação"
            >
                Pedidos respondidos
            </Header>
            <div className="container">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={imageCard1} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
               <button type="button" className="btn btn-primary btn-lg">Ver mais</button>
            </div>

        </>
    )
}

export default Respondidos