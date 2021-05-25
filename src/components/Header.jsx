import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Header extends React.Component{
    render(){
        return(
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <img src="/brand.jpg" width="40" height="40" className="d-inline-block align-top" alt=""/>
                <Navbar.Brand href="/India">Covid Status Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/India">India</Link>
                        <Link className="nav-link" to="/World">World</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        )
    }
}

export default Header;