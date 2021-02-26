import{Component} from "react";
// import { Container } from "react-bootstrap";
import {Container, Row, Col} from 'react-bootstrap'

class Header extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col><a href= "/">Home</a>
                    <a href= "/register">Register</a>
                    <a href= "/about">About</a>
                    <a href= "/login">Login</a>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Header;