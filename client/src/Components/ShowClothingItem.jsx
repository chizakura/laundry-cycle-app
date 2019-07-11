import React, {Component} from 'react';
import shirt from '../Images/shirt.png';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge'

class ShowClothingItem extends Component {
    componentDidMount() {
        const {handleClothingItem} = this.props;
        handleClothingItem(this.props.match.params.itemId)
    }

    editButton = () => {
        console.log('edit')
    }

    deleteButton = () => {
        console.log('delete')
    }

    render() {
        const {clothingItem} = this.props;
        return (
            <div className="clothing-item">
                <Card>
                    <Card.Header className="item-header">
                        <Card.Link as={Link} to="/closet" className="back-button"><i className="material-icons item-button">navigate_before</i>Closet</Card.Link>
                        <h3 className="item-title">{clothingItem.name}</h3>
                        <Badge><i onClick={this.deleteButton} className="material-icons item-button">delete</i></Badge>
                    </Card.Header>
                    <Card.Body>
                        <Row className="gap">
                            <Col><Card.Img className="profile-pic" src={shirt}/></Col>
                            <Col>
                                <Card.Text className="text-left profile-text">
                                    Type: {clothingItem.type}
                                    <Badge size="sm"><i onClick={this.editButton} className="material-icons item-button">edit</i></Badge>
                                </Card.Text>
                                <Card.Text className="text-left profile-text">
                                    Color: {clothingItem.color}
                                    <Badge size="sm"><i onClick={this.editButton} className="material-icons item-button">edit</i></Badge>
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col><Card.Header>Washer Options</Card.Header></Col>
                            <Col><Card.Header>Dryer Options</Card.Header></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ShowClothingItem;