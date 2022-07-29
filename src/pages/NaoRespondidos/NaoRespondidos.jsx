import { useEffect, useState } from 'react'
import Header from '../../componentes/Header/Header'
import image from '../../assets/naorespondidos_dois.svg'
import axios from 'axios'
import './naorespondidos.css'

import imageAvatar from '../../assets/avatar.chamado.svg'

// import list from '../../../dados'

function NaoRespondidos() {
    const [chamados, setChamados] = useState([])
    const baseURL = 'https://migameajuda.herokuapp.com/chamados/?status=aberto'

    useEffect(() => {
        axios
            .get(baseURL)
            .then((response) => setChamados(response.data))
    }, [])
    return (
        <>
            <Header
                image={image}
                description="Ilustração de duas pessoas de corpo inteiro com um ponto de interrogação em tamanho grande no meio"
            >
                Pedidos abertos
                <div className="abertos">
                    <p>Verifique aqui os pedidos não respondidos:</p>
                </div>
            </Header>

            {
                chamados.map(card => {
                    return (
                        <div className="container text-left">
                            <div className="row card-row">
                                <div className="col-2 col-sm-2 ">
                                    <div className="card-img">
                                        <img src={imageAvatar} alt="Scott Stevens" className="img-responsive img-circle image-avatar" />
                                    </div>
                                </div>
                                <div className="col-10 col-sm-10">
                                    <span className="name">{card.nome}</span><br />
                                    <span className="badge card-tecnologia">{card.tecnologia}</span><br /><br />
                                    <span className="text-muted">{card.assunto}</span><br />
                                    <span className="text-muted">{card.descricao}</span><br />
                                    <span className="fa fa-comments text-muted c-info" data-toggle="tooltip" title="scott.stevens@example.com"></span>
                                    <span className="text-muted">{card.contato}</span><br />
                                    <button type="button" className="btn btn-outline-secondary button-card" disabled>Ajudar</button>
                                </div>
                                

                            </div>
                        </div>
                        
                    )
                })
            }
            <div className="naorespon-submeter-botao" >
                <button type="button" className="btn btn-primary btn-lg naorespon-submeter efeito">Ver mais</button>
            </div>

        </>
    )
}

export default NaoRespondidos

// function dados() {

// }

