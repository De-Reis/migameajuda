import Header from '../../componentes/Header/Header'
import image from '../../assets/formulario.svg'

function Formulario() {
    return (
        <>
            <Header 
                image={image} 
                description="ilustracao mulher digitando site"
                >
                miga, registre aqui seu pedido de ajuda
            </Header>
            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Título</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Coloco aqui o título da sua solicitação" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Descrição</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="input-group mb-3">
                <input type="file" class="form-control" id="inputGroupFile02" />
                <label class="input-group-text" for="inputGroupFile02">Upload</label>
                <button type="button" class="btn-close" disabled aria-label="Close"></button>
            </div>
            <button type="button" class="btn btn-primary btn-lg">Submeter pedido</button>
        </>
    )
}

export default Formulario