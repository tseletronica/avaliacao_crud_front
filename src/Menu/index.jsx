import React from 'react';
import logo from '../Imagem/logo.jpg';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
} from 'reactstrap';
const Menu = ({ carregarUsuarios, filtroMaiorIdade, onClickNovo }) => {

    return (
        <Navbar color="info" light expand="md">
            <img width="30px" height="30px" className="img-logo" src={logo} />
            <NavbarBrand href="/" >Avaliação@PHP</NavbarBrand>

            <Nav className="mr-auto" navbar>
                <NavItem className="mr-auto" onClick={onClickNovo}>
                    <Button color="primary" className="button-new"> Novo </ Button>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <Button>Filtros </Button>
                        </DropdownToggle>
                    <DropdownMenu right >

                        <DropdownItem onClick={filtroMaiorIdade}>
                            Maior idade
                        </DropdownItem>
                        <DropdownItem onClick={carregarUsuarios}>
                            Reset
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            <NavbarText>Dev by @T.Serafim</NavbarText>
        </Navbar>

    );
}

export default Menu;