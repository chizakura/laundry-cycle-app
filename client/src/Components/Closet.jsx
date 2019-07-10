import React, {Component} from 'react';
import clothingImgDefault from '../Images/wh-custom-laundry-basket-full.png';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class Closet extends Component {
    render() {
        const {clothes} = this.props;
        return (
            <div className="closet">
                <Card className="gap" style={{width: '15rem'}}>
                    <h1>My Closet</h1>
                </Card>
                {clothes.map(item => {
                    return (
                        <CardDeck key={item.id}>
                            <Card style={{width: '15rem'}}>
                                <Card.Img variant="top" src={clothingImgDefault}/>
                                <Card.Body className="text-left">
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        Type: {item.type}
                                        <br></br>
                                        Color: {item.color}
                                    </Card.Text>
                                    <Card.Link href="#">More</Card.Link>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    )
                })}
            </div>
        )
    }
}

export default Closet;