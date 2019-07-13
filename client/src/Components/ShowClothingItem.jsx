// Got getNestedObject function from https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f
import React, {Component} from 'react';
import shirt from '../Images/shirt.png';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';

class ShowClothingItem extends Component {
    componentDidMount() {
        const {handleClothingItem} = this.props;
        handleClothingItem(this.props.match.params.itemId);
    }

    editButton = () => {
        console.log('edit')
    }

    deleteButton = () => {
        console.log('delete')
    }

    getNestedObject = (nestedObj, pathArr) => {
        return pathArr.reduce((obj, key) =>
            (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj)
    }

    render() {
        const {clothingItem} = this.props;
        const {getNestedObject} = this;
        return (
            <div className="clothing-item">
                <Card>
                    <Card.Header className="item-header">
                        <Card.Link as={Link} to="/closet" className="back-button"><i className="material-icons item-button">navigate_before</i>Closet</Card.Link>
                        <h3 className="item-title">{clothingItem.description}</h3>
                        <Badge><i onClick={this.deleteButton} className="material-icons item-button">delete</i></Badge>
                    </Card.Header>
                    <Card.Body>
                        <Row className="gap">
                            <Col><Card.Img className="profile-pic" src={shirt}/></Col>
                            <Col className="text-left profile-text">
                                <Card.Text>
                                    Shade Category: {clothingItem.colorShade}
                                    <Badge size="sm"><i onClick={this.editButton} className="material-icons item-button">edit</i></Badge>
                                </Card.Text>
                                <Card.Text>
                                    Type: {clothingItem.type}
                                    <Badge size="sm"><i onClick={this.editButton} className="material-icons item-button">edit</i></Badge>
                                </Card.Text>
                                <Card.Text>
                                    Material: {clothingItem.material}
                                    <Badge size="sm"><i onClick={this.editButton} className="material-icons item-button">edit</i></Badge>
                                </Card.Text>
                                <Card.Text>
                                    Brand: {clothingItem.brand}
                                    <Badge size="sm"><i onClick={this.editButton} className="material-icons item-button">edit</i></Badge>
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Accordion>
                                    <Card bg="info" text="white">
                                        <Accordion.Toggle as={Card.Header} eventKey="0">Washer Option</Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <Row className="gap">
                                                    <Col className="symbol-placement">
                                                        <Card.Text><i className={`icon icon-${getNestedObject(clothingItem, ['washoption', 'name'])} symbol-size`}></i></Card.Text>
                                                    </Col>
                                                    <Col className="text-left capitalize">
                                                        <Card.Text>{getNestedObject(clothingItem, ['washoption', 'type'])}</Card.Text>
                                                        <Card.Text>Cycle: {getNestedObject(clothingItem, ['washoption', 'cycle'])}</Card.Text>
                                                        <Card.Text>Water Temperature: {getNestedObject(clothingItem, ['washoption', 'waterTemp'])}</Card.Text>
                                                        <Card.Text>Washable: {getNestedObject(clothingItem, ['washoption', 'canWash']) ? 'yes' : 'no'}</Card.Text>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Card.Text className="text-left">Symbol Info: {getNestedObject(clothingItem, ['washoption', 'about'])}</Card.Text>
                                                </Row>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                            <Col>
                                <Accordion>
                                    <Card bg="info" text="white">
                                        <Accordion.Toggle as={Card.Header} eventKey="0">Dry Option</Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <Row className="gap">
                                                    <Col className="symbol-placement">
                                                        <Card.Text><i className={`icon icon-${getNestedObject(clothingItem, ['dryoption', 'name'])} symbol-size`}></i></Card.Text>
                                                    </Col>
                                                    <Col className="text-left capitalize">
                                                        <Card.Text>{getNestedObject(clothingItem, ['dryoption', 'type'])}</Card.Text>
                                                        <Card.Text>Setting: {getNestedObject(clothingItem, ['dryoption', 'setting'])}</Card.Text>
                                                        <Card.Text>Heat Level: {getNestedObject(clothingItem, ['dryoption', 'heatLevel'])}</Card.Text>
                                                        <Card.Text>Can Tumble Dry?: {getNestedObject(clothingItem, ['dryoption', 'canTumbleDry']) ? 'yes' : 'no'}</Card.Text>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Card.Text className="text-left">Symbol Info: {getNestedObject(clothingItem, ['dryoption', 'about'])}</Card.Text>
                                                </Row>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ShowClothingItem;