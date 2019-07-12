import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import clothingImgDefault from '../Images/shirt.png';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

class Closet extends Component {
    componentDidMount(){
        const {handleClothes} = this.props;
        const userId = localStorage.getItem('userId');
        handleClothes(userId)
    }

    render() {
        const {clothes} = this.props;
        return (
            <div className="closet">
                <Card className="gap" border="warning" style={{width: '15rem'}}>
                    <h1>My Closet</h1>
                </Card>
                <CardColumns>
                {clothes.map(item => {
                    return (
                        <Card key={item.id} border="warning" style={{width: '15rem'}}>
                            <Card.Img variant="top" src={clothingImgDefault}/>
                            <Card.Body className="text-left">
                                <Card.Title>{item.description}</Card.Title>
                                <Card.Text>
                                    Type: {item.type}
                                    <br></br>
                                    Shade Category: {item.shadeCategory}
                                </Card.Text>
                                <Card.Link as={Link} to={`/closet/${item.id}`}>More</Card.Link>
                            </Card.Body>
                        </Card>
                    )
                })}
                </CardColumns>
            </div>
        )
    }
}

export default Closet;