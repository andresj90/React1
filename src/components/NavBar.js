import React, { Component } from 'react'
//import mainlogo from '../../public/logos/logomain.JPG'; 
// import './global.scss';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import {
    Link,
    BrowserRouter as Router
} from 'react-router-dom'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false

        }

        this.toggle = this.toggle.bind(this);
    }


    toggle = () => {
        console.log(this.state.isOpen);
        this.setState({ isOpen: !this.state.isOpen });
        console.log(this.state.isOpen);
    }
    render() {
        return (
            <div>
                <Navbar color="secondary" light expand="md" className="NavBar" className="NavBar">
                    <NavbarBrand ><img src={process.env.PUBLIC_URL + '/logos/logomain.JPG'} style={{width:25}} /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink className="NavBar_link" active><Link to="/">Home</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="NavBar_link" ><Link to="/episodes">Episodes</Link></NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>Simple Text</NavbarText>
                    </Collapse>
                </Navbar>

            </div>
        )
    }
}

export default NavBar
