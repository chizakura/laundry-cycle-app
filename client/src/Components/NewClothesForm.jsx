import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
// import '../Washicons-master/washicons/styles.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

class NewClothesForm extends Component {
    state = {
        washoptionId: "",
        dryoptionId: "",
        description: "",
        type: "",
        shadeCategory: "",
        material: "",
        brand: "",
        redirect: false
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        // console.log(`${name} | ${value}`)
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {user} = this.props;
        const {description, type, shadeCategory, material, brand, washoptionId, dryoptionId} = this.state;
        await axios.post(`/items/create`, {
            description,
            type,
            shadeCategory,
            material,
            brand,
            userId: user.id,
            washoptionId,
            dryoptionId
        });
        this.setState({
            redirect: true
        })
    }

    render() {
        const {description, material, brand, redirect} = this.state;
        const {washOptions, dryOptions} = this.props;
        return (
            <div className="new-clothes">
                {redirect ? <Redirect to="/closet"/> : null}
                <Card style={{width: '35rem'}}>
                    <Card.Header>Create New Clothing Item</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="itemDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control name="description" type="text" placeholder="i.e. blue shirt, lemon pattern blouse, etc." value={description} onChange={this.handleChange} required></Form.Control>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="itemType">
                                    <Form.Label>Type</Form.Label>
                                    <Form.Control name="type" as="select" onChange={this.handleChange} required>
                                        <option value="">Please select a type</option>
                                        <option value="shirt">Shirt</option>
                                        <option value="pants">Pants</option>
                                        <option value="blouse">Blouse</option>
                                        <option value="shorts">Shorts</option>
                                        <option value="skirt">Skirt</option>
                                        <option value="socks">Socks</option>
                                        <option value="cardigan">Cardigan</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="itemShade">
                                    <Form.Label>Shade</Form.Label>
                                    <Form.Control name="shadeCategory" as="select" onChange={this.handleChange} required>
                                        <option value="">Please select a shade</option>
                                        <option value="light">Light</option>
                                        <option value="dark">Dark</option>
                                        <option value="mixed">Mixed</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="itemMaterial">
                                    <Form.Label>Material</Form.Label>
                                    <Form.Control name="material" type="text" placeholder="Enter type of material" value={material} onChange={this.handleChange}></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="itemBrand">
                                    <Form.Label>Brand</Form.Label>
                                    <Form.Control name="brand" type="text" placeholder="Enter brand" value={brand} onChange={this.handleChange}></Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="washerOptions">
                                <Form.Label>Washer Options:</Form.Label>
                                <Form.Row>
                                    <Col>
                                        <ButtonGroup aria-label="washer" className="button-list" onClick={this.handleChange}>
                                            {washOptions.map(option => {
                                                return (
                                                    <OverlayTrigger
                                                        key={option.id}
                                                        placement="top" 
                                                        overlay={<Tooltip id="tooltip-top">{option.about}</Tooltip>}
                                                    >
                                                        <Button key={option.id} name="washoptionId" variant="light" value={option.id} className={`icon icon-${option.name} icon-size`}></Button>
                                                    </OverlayTrigger>
                                                )
                                            })}
                                        </ButtonGroup>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group controlId="dryerOptions">
                                <Form.Label>Dryer Options:</Form.Label>
                                <Form.Row>
                                    <Col>
                                        <ButtonGroup aria-label="dryer" className="button-list" onClick={this.handleChange}>
                                            {dryOptions.map(option => {
                                                return (
                                                    <OverlayTrigger
                                                        key={option.id}
                                                        placement="top"
                                                        overlay={<Tooltip id="tooltip-top">{option.about}</Tooltip>}
                                                    >
                                                        <Button key={option.id} name="dryoptionId" variant="light" value={option.id} className={`icon icon-${option.name} icon-size`}></Button>
                                                    </OverlayTrigger>
                                                )
                                            })}
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