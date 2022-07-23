import Header from '../../componentes/Header/Header'
import image from '../../assets/respondidos.png'
import './respondidos.css'

import list from '../../../dados'

function Respondidos() {
    return (
        <>
            <Header
                image={image}
                description="balões de conversação"
            >
                Pedidos respondidos
            </Header>

            {
                list.map(card => {
                    return (
                        <div className="container card-container" key={card.id}>
                            <div class="row">
                                <div class="col-xs-12 col-sm-offset-3 col-sm-6">
                                    <div class="panel panel-default">
                                        <ul class="list-group" id="contact-list">
                                            <li class="list-group-item">
                                                <div class="col-xs-12 col-sm-3">
                                                    <img src={card.imagem} alt="Scott Stevens" class="img-responsive img-circle" />
                                                </div>
                                                <div class="col-xs-12 col-sm-9">
                                                    <span class="name">{card.nome}</span><br />
                                                    <span class="glyphicon glyphicon-map-marker text-muted c-info" data-toggle="tooltip" title="5842 Hillcrest Rd"></span>
                                                    <span class="visible-xs"> <span class="text-muted">{card.assunto}</span><br /></span>
                                                    <span class="glyphicon glyphicon-earphone text-muted c-info" data-toggle="tooltip" title="(870) 288-4149"></span>
                                                    <span class="visible-xs"> <span class="text-muted">{card.abertura}</span><br /></span>
                                                    <span class="fa fa-comments text-muted c-info" data-toggle="tooltip" title="scott.stevens@example.com"></span>
                                                    <span class="visible-xs"> <span class="text-muted">{card.contato}</span><br /></span>
                                                </div>
                                                <div class="clearfix"></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            

            <button type="button" className="btn btn-primary btn-lg">Ver mais</button>

        </>
    )
}

export default Respondidos

function dados() {

}