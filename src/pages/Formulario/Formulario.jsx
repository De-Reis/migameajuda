import { useState } from 'react' 
import Header from '../../componentes/Header/Header'
import image from '../../assets/formulario.svg'

import './formulario.css'
import axios from 'axios'



function Formulario() {
    const [form, setForm] = useState([])
 
    const [newName, setNewName] = useState([])
    const [newContact, setNewContact] = useState([])
    const [newSubject, setNewSubject] = useState([])
    const [newDescription, setNewDescription] = useState([])


    function handleCreateForm() {
        const valueForm = {
            id: Math.random(),
            nome: newName,
            contato: newContact,
            assunto: newSubject,
            descricao: newDescription,
            status: "aberto",
        }
         console.log(valueForm)

        axios.post('http://localhost:3000/chamados', {
            d: Math.random(),
            nome: newName,
            contato: newContact,
            assunto: newSubject,
            descricao: newDescription,
            status: "aberto",
        })
        .then(function (response){
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
                description="ilustracao mulher digitando site"
            >
                miga, registre aqui seu pedido de ajuda:
            </Header>
            <div className="container">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Nome:</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" 
                    placeholder="Digite aqui seu nome" 
                    onChange={(e) => setNewName(e.target.value)}
                    value={newName}
                    />

                    <label for="exampleFormControlInput1" className="form-label">Contato:</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" 
                    placeholder="Digite aqui seu WhatsApp" 
                    onChange={(e) => setNewContact(e.target.value)}
                    value={newContact}
                    />

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
                    <button type="button" onClick={handleCreateForm} className="btn btn-primary btn-lg form-submeter">Submeter pedido</button>
                </div>
                
            </div>
            
                

            
        </>
    )
}

export default Formulario