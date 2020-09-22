import React from 'react';
import {Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavigationBarBlk = () => {
    return (
        <Navbar expand="lg">
            <div className="container">
                <Navbar.Brand>
                    <Link to="/home">
                        <img src="https://i.ibb.co/PG0kYdc/Group-1330.png" alt="" />
                    </Link>    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <FormControl type="text" placeholder="Search your destination" className="mr-sm-2" />
                    </Form>
                    <Nav className="ml-auto">
                        <Nav.Link className="text-white mr-5"><Link style={{textDecoration: 'none', color: '#000'}} to="/home">Home</Link></Nav.Link>
                        <Nav.Link className="mr-5"><Link style={{textDecoration: 'none', color: '#000'}} to="/contact">Contact us</Link></Nav.Link>
                        <Link style={{textDecoration: 'none', color: '#fff'}} to="/login">
                            <Button variant="warning">Login</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NavigationBarBlk;