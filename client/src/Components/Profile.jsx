import React, {Component} from 'react';
import profilePic from '../Images/default-avatar-png-6.png';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Profile extends Component {
    render() {
        const {user, count} = this.props;
        return (
            <div className="profile">
                <Card>
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Card.Title><h3>{user.name}</h3></Card.Title>
                        <Row>
                            <Col><Card.Img className="profile-pic" src={profilePic}/></Col>
                            <Col><Card.Text className="text-left profile-text">Number of clothing items: {count}</Card.Text></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Profile;