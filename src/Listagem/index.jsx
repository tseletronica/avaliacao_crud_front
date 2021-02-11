import React, { Fragment, useEffect, useState } from 'react';
import Formulario from '../Formulario';
import api from '../services/api';
import { Col, Row } from 'reactstrap';
import Menu from '../Menu';
import Tabela from '../Tabela';



const ListarUsuarios = () => {

    const [modal, setModal] = useState(false)
    const [meusDados, setMeusDados] = useState([])

    const abrirModal = () => (setModal(true))

    const deletarUsuario = async (id) => {
        try {
            const response = await api.delete(`/usuarios/${id}`);
            alert("Usuário apagado com sucesso!")
            carregarUsuarios();


        } catch (error) {
            alert("Não foi possível apagar o usuário.")
            console.log(error)

        }

    }

    const carregarUsuarios = async () => {

        const response = await api.get('/usuarios');
        setMeusDados(response.data.usuarios)
        console.log(response)
    }
    
    
    const filtroMaiorIdade = async () => {
        const response = await api.get('/usuarios?maior_idade=true');
        setMeusDados(response.data.usuarios)
        console.log(response)
    }
    useEffect(() => {
        carregarUsuarios()
    }, [modal])
    return (


        <Fragment>

            <Menu carregarUsuarios={carregarUsuarios} onClickNovo={abrirModal} filtroMaiorIdade={filtroMaiorIdade} />
            <Formulario isOpen={modal} setIsOpen={setModal} />
            <Row noGutters className="row-alinhamento"> 
                <Col md={8}>
                <Tabela dados={meusDados} deletarUsuario={deletarUsuario} carregarUsuarios={carregarUsuarios}/>
                </Col>
            
            </Row>
            
        </Fragment>
    )
}

export default ListarUsuarios;