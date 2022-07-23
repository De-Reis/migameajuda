import Header from '../../componentes/Header/Header'
import image from '../../assets/formulario.svg'

function Formulario() {
    return (
        <>
            <Header
                image={image}
                description="ilustracao mulher digitando site"
            >
                miga, registre aqui seu pedido de ajuda:
            </Header>
            <div className="container">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Título</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Digite aqui o assunto da sua solicitação" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Descrição</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile02" />
                    <label className="input-group-text" for="inputGroupFile02">Upload</label>
                    <button type="button" className="btn-close" disabled aria-label="Close"></button>
                </div>
            </div>
            

            <button type="button" className="btn btn-primary btn-lg">Submeter pedido</button>
        </>
    )
}

export default Formulario