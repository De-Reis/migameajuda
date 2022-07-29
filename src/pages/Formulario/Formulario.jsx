import { useState } from 'react'
import Header from '../../componentes/Header/Header'
import image from '../../assets/formulario.svg'

import './formulario.css'
import axios from 'axios'



function Formulario() {
    // const [form, setForm] = useState([])
    const [newName, setNewName] = useState([])
    const [newContact, setNewContact] = useState([])
    const [newTecnologia, setNewTecnologia] = useState([])
    const [newSubject, setNewSubject] = useState([])
    const [newDescription, setNewDescription] = useState([])


    function handleCreateForm() {
        const valueForm = {
            id: Math.random(),
            nome: newName,
            contato: newContact,
            tecnologia: newTecnologia,
            assunto: newSubject,
            descricao: newDescription,
            status: "aberto",
        } 
        console.log(valueForm)

        if (newName == '') {
            alert("Favor preencher seu nome")
            return
        }

        if (newContact == '') {
            alert("Favor preencher seu contato")
            return
        }

        if (newTecnologia == '') {
            alert("Favor escolher uma opção de tecnologia")
            return
        }



        if (newSubject == '') {
            alert("Favor preencher o título do seu pedido")
            return
        }

        if (newDescription == '') {
            alert("Favor preencher a descrição do seu pedido")
            return
        }



        axios.post('https://migameajuda.herokuapp.com/chamados', valueForm

        )
            .then(function (response) {
                setNewName('')
                setNewContact('')
                setNewTecnologia('')
                setNewSubject('')
                setNewDescription('')
                alert("Pedido enviado com sucesso!")

                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })


    }
    return (
        <>
            <Header
                image={image}
                description="ilustracao de mulher negra preenchendo um formulário"
            >
                miga,
                <div className="abertos">
                    <p> registre aqui seu pedido de ajuda:</p>
                </div>
            </Header>
            <div className="container">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Nome:</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        placeholder="Digite aqui seu nome"
                        onChange={(e) => setNewName(e.target.value)}
                        value={newName}
                    />

                    <label for="input de numero de telefone" className="form-label">Contato:</label>
                    <input type="tel" className="form-control" id="telefone"
                        pattern="\([0-9]{2}\)[9]{1}[0-9]{4}-[0-9]{4}"
                        required placeholder="(00) 90000-0000"
                        onChange={(e) => setNewContact(e.target.value)}
                        value={newContact}
                    />
                    <div>
                        <label for="exampleFormControlInput1" className="form-label">Tecnologia:</label>
                        <select class="form-select" aria-label="Default select example" 
                         onChange={(e) => setNewTecnologia(e.target.value)}
                         
                        >
                            <option value="">Escolha uma opção</option>
                            <option value="Git e Github">Git e Github</option>
                            <option value="CSS">CSS</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="React">React</option>
                            <option value="Hospedagem de site">Hospedagem de site</option>
                            <option value="Projeto">Projeto</option>
                            <option value="Outros">Outros</option>

                        </select>
                    </div>
                    <label for="exampleFormControlInput1" className="form-label">Título:</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                        placeholder="Digite aqui o assunto da sua solicitação"
                        onChange={(e) => setNewSubject(e.target.value)}
                        value={newSubject}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Descrição:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                        onChange={(e) => setNewDescription(e.target.value)}
                        value={newDescription}
                    >
                    </textarea>
                </div>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile02" />
                    <label className="input-group-text" for="inputGroupFile02">Upload</label>
                    <button type="button" className="btn-close" disabled aria-label="Close"></button>
                </div>
                <div className="form-submeter-botao">
                    <button type="button" onClick={handleCreateForm} className="btn btn-primary btn-lg form-submeter efeito">Submeter pedido</button>
                </div>

            </div>




        </>
    )
}

export default Formulario