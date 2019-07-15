import React, {Component} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

class EditCardText extends Component {
    state = {
        shadeCategory: "",
        type: "",
        material: "",
        brand: ""
    }

    componentDidMount() {
        const {handleClothingItem, itemId, shadeCategoryValue, typeValue, materialValue, brandValue} = this.props;
        handleClothingItem(itemId);
        this.setState({
            shadeCategory: shadeCategoryValue,
            type: typeValue,
            material: materialValue,
            brand: brandValue
        })
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = async (event) => {
        event.preventDefault();
        await axios.put(`http://localhost:4567/items/${this.props.itemId}`, {
            type: this.state.type,
            shadeCategory: this.state.shadeCategory,
            material: this.state.material,
            brand: this.state.brand
        })
        this.props.editButton();
    }

    render() {
        const {shadeCategoryValue, typeValue, materialValue, brandValue} = this.props;
        const {shadeCategory, type, material, brand} = this.state;
        return (
            <Form onSubmit={this.handleOnSubmit}>
                <Form.Group as={Row} controlId="shadeCategory">
                    <Col sm="5">
                        <Form.Label>Shade Category:</Form.Label>
                    </Col>
                    <Col sm="7">
                        <Form.Control size="sm" name="shadeCategory" type="text" placeholder={shadeCategoryValue} value={shadeCategory} onChange={this.handleChange}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="type">
                    <Col sm="5">
                        <Form.Label>Type:</Form.Label>
                    </Col>
                    <Col sm="7">
                        <Form.Control size="sm" name="type" type="text" placeholder={typeValue} value={type} onChange={this.handleChange}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="material">
                    <Col sm="5">
                        <Form.Label>Material:</Form.Label>
                    </Col>
                    <Col sm="7">
                        <Form.Control size="sm" name="material" type="text" placeholder={materialValue} value={material} onChange={this.handleChange}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="brand">
                    <Col sm="5">
                        <Form.Label>Brand:</Form.Label>
                    </Col>
                    <Col sm="7">
                        <Form.Control size="sm" name="brand" type="text" placeholder={brandValue} value={brand} onChange={this.handleChange}/>
                    </Col>
                </Form.Group>
                <Button variant="light" type="submit">Submit</Button>
            </Form>
        )
    }
}

export default EditCardText;