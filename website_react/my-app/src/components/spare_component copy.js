import React from 'react';
// import logo from '../styles/logo.svg';
import '../styles/spare_component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';

class SpareComponent extends React.Component {

    constructor() {
        super();
        this.props = { color: "red" };
    }

    render() {
        return (

            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                    <Col>3 of 3</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        );
    }
}

export default SpareComponent