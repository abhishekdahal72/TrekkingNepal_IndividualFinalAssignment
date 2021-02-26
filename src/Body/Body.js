import{Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {Route} from 'react-router-dom'
import Home from "./Home";
import Register from './Register'

class Body extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <Route path = "/register" exact component = {Register}/>
                        <Route path = "/" exact component = {Home}/>
                    </Col>
                    <Col>
                        
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}
export default Body;