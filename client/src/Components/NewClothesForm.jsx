import React, {Component} from 'react';
// import axios from 'axios';
import '../Washicons-master/washicons/styles.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class NewClothesForm extends Component {
    state = {
        washoptionId: "",
        dryoptionId: "",
        name: "",
        type: "",
        color: ""
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {user} = this.props;
        console.log(user.id)
    }

    render() {
        const {name, type, color} = this.state;
        return (
            <div className="new-clothes">
                <Card style={{width: '30rem'}}>
                    <Card.Header>Create New Clothing Item</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="itemName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" type="text" placeholder="i.e. my favorite shirt" value={name} onChange={this.handleChange}></Form.Control>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="itemType">
                                    <Form.Label>Type</Form.Label>
                                    <Form.Control name="type" type="text" placeholder="i.e. t-shirt, blouse, etc." value={type} onChange={this.handleChange}></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="itemColor">
                                    <Form.Label>Color</Form.Label>
                                    <Form.Control name="color" type="text" placeholder="Enter color" value={color} onChange={this.handleChange}></Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="washerOptions">
                                <Form.Label>Washer Options:</Form.Label>
                                <Form.Row>
                                    <Col>
                                        <ButtonGroup aria-label="washer" onClick={this.handleChange}>
                                            <Button variant="light" name="washoptionId" value="1">Left</Button>
                                            <Button variant="light" name="washoptionId" value="2">Middle</Button>
                                            <Button variant="light" name="washoptionId" value="3">Right</Button>
                                            <Button variant="light" name="washoptionId" value="4">Right</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group controlId="dryerOptions">
                                <Form.Label>Dryer Options:</Form.Label>
                                <Form.Row>
                                    <Col>
                                        <ButtonGroup aria-label="dryer" onClick={this.handleChange}>
                                            <Button variant="light" name="dryoptionId" value="1"><i className="icon icon-wh-washing"></i></Button>
                                            <Button variant="light" name="dryoptionId" value="2">Middle</Button>
                                            <Button variant="light" name="dryoptionId" value="3">Right</Button>
                                            <Button variant="light" name="dryoptionId" value="4">Right</Button>
                                        </ButtonGroup>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Button variant="outline-secondary" type="submit">Add to Closet</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default NewClothesForm;