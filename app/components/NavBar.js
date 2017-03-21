import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class NavBar extends React.Component{
    render(){
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Menu Plus</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem href = "#">Login</NavItem>
                    <NavItem href = "#">Sign Up</NavItem>
                </Nav>
            </Navbar>
        );
    }
}
