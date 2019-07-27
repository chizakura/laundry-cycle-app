import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';

class CardText extends Component {
    componentDidMount() {
        const {handleClothingItem, itemId} = this.props;
        handleClothingItem(itemId);
    }

    render() {
        const {shadeCategoryValue, typeValue, materialValue, brandValue, sizeValue} = this.props;
        return (
            <div>
                <Card.Text>
                    Shade Category: {shadeCategoryValue}
                </Card.Text>
                <Card.Text>
                    Type: {typeValue}
                </Card.Text>
                <Card.Text>
                    Material: {materialValue}
                </Card.Text>
                <Card.Text>
                    Brand: {brandValue}
                </Card.Text>
                <Card.Text>
                    Size: {sizeValue}
                </Card.Text>
            </div>
        )
    }
}

export default CardText;