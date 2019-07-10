import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Profile extends Component {
    render() {
        const {user} = this.props;
        return (
            <div className="profile">
                <Card>
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Card.Title><h3>{user.name}</h3></Card.Title>
                        <Row>
                            <Col><Card.Img className="profile-pic" src="https://i.ya-webdesign.com/images/default-avatar-png-6.png"/></Col>
                            <Col><Card.Text className="text-left">Number of clothing items:</Card.Text></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Profile;