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
                description="folha A4 com lista de pedidos"
            >
                Pedidos em aberto
            </Header>

            {
                chamados.map(card => {
                    return (
                        <div class="container text-left">
                            <div class="row card-row">
                                <div class="col-2 col-sm-2">
                                    <img src={imageAvatar} alt="Scott Stevens" class="img-responsive img-circle image-avatar" />

                                </div>
                                <div class="col-10 col-sm-10">
                                    <span class="name">{card.nome}</span><br />
                                    <span class="text-muted">{card.assunto}</span><br />
                                    <span class="text-muted">{card.descricao}</span><br />
                                    <span class="fa fa-comments text-muted c-info" data-toggle="tooltip" title="scott.stevens@example.com"></span>
                                    <span class="text-muted">{card.contato}</span><br />
                                    <button type="button" class="btn btn-outline-secondary button-card" disabled>Ajudar</button>
                                </div>
                                

                            </div>
                        </div>
                        
                    )
                })
            }
            <div className="naorespon-submeter-botao" >
                <button type="button" class="btn btn-primary btn-lg naorespon-submeter efeito">Ver mais</button>
            </div>

        </>
    )
}

export default NaoRespondidos

// function dados() {

// }

