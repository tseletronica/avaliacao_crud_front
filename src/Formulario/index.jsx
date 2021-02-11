import React, { Fragment, useEffect, useState } from 'react'
import { Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import api from '../services/api';

const Formulario = ({ isOpen, setIsOpen, usuarios, id, carregarUsuarios}) => {

    const [meuForm, setMeuForm] = useState({
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        data_nascimento:'',
        cpf_cnpj: '',
        senha: ''

    });

    const setarDados = (event) => {
        const nome = event.target.name
        const valor = event.target.value

        setMeuForm({
            ...meuForm,
            [nome]: valor
        })
    }

    const onSubmit = async () => {
        try {
            if(usuarios === undefined){
                await api.post('/usuarios', meuForm);
            alert("Usuário adicionado com sucesso.")
            setMeuForm({
                nome: '',
                email: '',
                telefone: '',
                endereco: '',
                data_nascimento:'',
                cpf_cnpj:'',
                senha: ''
            })
        }else{
            await api.put(`/usuarios/${meuForm.id}`, meuForm);
            alert("Usuário alterado com sucesso.")
            carregarUsuarios() 
            }
            setIsOpen(false);
        } catch (error) {
            console.log(error)
            alert("Não foi possivel adicionar usuario, verfique os dados.")
        }
    }
    useEffect(()=>{
        if(id!==undefined){
            const usuario = usuarios.find(usuario =>(usuario.id === id))
            setMeuForm({...usuario})
        }
    },[id])
    return (

        <Modal isOpen={isOpen} >
            <ModalHeader >Cadastro de usuários</ModalHeader>
            <ModalBody>
                <Label>Nome</Label>
                <Input type='text' name={'nome'} onChange={setarDados} value={meuForm.nome} />

                <Label>CPF/CNPJ</Label>
                <Input type='text' name={'cpf_cnpj'} onChange={setarDados} value={meuForm.cpf_cnpj} />

                <Label>Data de Nascimento</Label>
                <Input type='date' name={'data_nascimento'} onChange={setarDados} value={meuForm.data_nascimento} />

                <Label>Email</Label>

                <Input type='text' name={'email'} onChange={setarDados} value={meuForm.email} />

                <Label>Fone</Label>
                <Input type='text' name={'telefone'} onChange={setarDados} value={meuForm.telefone} />

                <Label>Endereço</Label>
                <Input type='text' name={'endereco'} onChange={setarDados} value={meuForm.endereco} />

                <Label>Senha</Label>
                <Input type='password' name={'senha'} onChange={setarDados} value={meuForm.senha} />

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={onSubmit}>Salvar</Button>{' '}

                <Button color="secondary" onClick={() => setIsOpen(false)} >Cancelar</Button>

            </ModalFooter>
        </Modal>
    )
}


export default Formulario;