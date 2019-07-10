import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class Closet extends Component {
    render() {
        return (
            <div className="closet">
                <Card className="closet-title" style={{width: '15rem'}}>
                    <h1>My Closet</h1>
                </Card>
                <CardDeck>
                    <Card style={{width: '15rem'}}>
                        <Card.Img variant="top" src="wh-custom-laundry-basket-full.png"/>
                        <Card.Body className="text-left">
                            <Card.Title>Clothing Item Name 1</Card.Title>
                            <Card.Text>Type and Color</Card.Text>
                            <Card.Link href="#">More</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '15rem'}}>
                        <Card.Img variant="top" src="wh-custom-laundry-basket-full.png"/>
                        <Card.Body className="text-left">
                            <Card.Title>Clothing Item Name 2</Card.Title>
                            <Card.Text>Type and Color</Card.Text>
                            <Card.Link href="#">More</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '15rem'}}>
                        <Card.Img variant="top" src="wh-custom-laundry-basket-full.png"/>
                        <Card.Body className="text-left">
                            <Card.Title>Clothing Item Name 3</Card.Title>
                            <Card.Text>Type and Color</Card.Text>
                            <Card.Link href="#">More</Card.Link>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <CardDeck>
                    <Card style={{width: '15rem'}}>
                        <Card.Img variant="top" src="wh-custom-laundry-basket-full.png"/>
                        <Card.Body className="text-left">
                            <Card.Title>Clothing Item Name</Card.Title>
                            <Card.Text>Type and Color</Card.Text>
                            <Card.Link href="#">More</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '15rem'}}>
                        <Card.Img variant="top" src="wh-custom-laundry-basket-full.png"/>
                        <Card.Body className="text-left">
                            <Card.Title>Clothing Item Name</Card.Title>
                            <Card.Text>Type and Color</Card.Text>
                            <Card.Link href="#">More</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '15rem'}}>
                        <Card.Img variant="top" src="wh-custom-laundry-basket-full.png"/>
                        <Card.Body className="text-left">
                            <Card.Title>Clothing Item Name</Card.Title>
                            <Card.Text>Type and Color</Card.Text>
                            <Card.Link href="#">More</Card.Link>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}

export default Closet;