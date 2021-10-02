import Tabs from '@restart/ui/esm/Tabs';
import React from 'react';
import { Container, Nav, Navbar, Stack, Tab, Sonnet } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand to="/home">Employee Details</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Stack direction="horizontal" gap={3}>
                            <NavLink
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/employee"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                }}
                            >
                                Employee
                            </NavLink>
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;