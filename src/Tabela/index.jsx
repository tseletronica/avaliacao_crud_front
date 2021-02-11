import React, { useState } from 'react';
import {Table,  Button} from 'reactstrap';
import Formulario from '../Formulario';

const Tabela = ({dados, deletarUsuario, carregarUsuarios})=>{
    const [isOpen, setIsOpen] = useState(false)
    const [usuarioId, setUsuarioId] = useState()
    const abrirModalEditar = (id) => {
        setIsOpen(true)
        setUsuarioId(id)
    }
    return (
    <Table striped>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
            {dados&&dados.map(dado=>(
                <tr key={dado.id}> 
                    <td>
                        {dado.nome}
                    </td>
                    <td>
                        {dado.telefone}
                    </td>
                    <td>
                        {dado.email}
                    </td>
                    <td>
                    
                        <Button onClick={()=>abrirModalEditar(dado.id)} color="warning" className="button-tabela"> Editar </Button>
                        <Button onClick={()=>deletarUsuario(dado.id)} color="danger" className="button-tabela"> Apagar </Button>
                    </td>
                </tr>
            ))}
         
        </tbody>
        
            <Formulario usuarios={dados} id={usuarioId} setIsOpen={setIsOpen} isOpen={isOpen} carregarUsuarios={carregarUsuarios}/>
      </Table>
      )
}
export default Tabela;
