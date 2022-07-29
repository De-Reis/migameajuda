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
                description="Ilustração de mulher branca sentada digitando em um notbook com um copo de café ao lado"
            >
                Pedidos respondidos
                <div className="abertos">
                    <p>Verifique aqui todos os pedidos já respondidos:</p>
                </div>
            </Header>

            {
                chamados.map(card => {
                    return (
                        <div className="container text-left">
                            <div className="row card-row">
                                <div className="col-2 col-sm-2">
                                    <div className="card-img">
                                        <img src={imageAvatar} alt="Scott Stevens" className="img-responsive img-circle image-avatar" />
                                    </div>
                                </div>
                                <div className="col-10 col-sm-10">
                                    <span className="name">{card.nome}</span><br />
                                    <span className="text-muted">{card.tecnologia}</span><br />                                    
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
            
            <div className="respon-submeter-botao" >
            <button type="button" className="btn btn-primary btn-lg respon-submeter efeito">Ver mais</button>
            </div>
            

        </>
    )
}

export default Respondidos

// function dados() {

// }