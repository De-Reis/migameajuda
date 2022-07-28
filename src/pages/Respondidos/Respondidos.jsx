import { useEffect, useState } from 'react'
import Header from '../../componentes/Header/Header'
import image from '../../assets/respondidos_dev.svg'
import axios from 'axios'
import './respondidos.css'

import imageAvatar from '../../assets/avatar.chamado.svg'

function Respondidos() {
    const [chamados, setChamados] = useState([])
    const baseURL = 'https://migameajuda.herokuapp.com/chamados/?status=fechado'
    
    useEffect(()=> {
        axios
        .get(baseURL)
        .then((response) => setChamados(response.data))
    },  [])


    return (
        <>
            <Header
                image={image}
                description="balões de conversação"
            >
                Pedidos respondidos
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
            
            <div className="respon-submeter-botao" >
            <button type="button" className="btn btn-primary btn-lg respon-submeter efeito">Ver mais</button>
            </div>
            

        </>
    )
}

export default Respondidos

// function dados() {

// }