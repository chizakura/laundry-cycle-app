import React, {Component} from 'react';
import profilePic from '../Images/default-avatar-png-6.png';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Profile extends Component {
    componentDidMount(){
        const {handleClothes} = this.props;
        const userId = localStorage.getItem('userId');
        handleClothes(userId)
    }

    render() {
        const {user, count} = this.props;
        return (
            <div className="profile">
                <Card>
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Row>
                            <Col className="gap">
                                <Card.Title><h3>{user.name}</h3></Card.Title>
                                <Card.Img className="profile-pic" src={profilePic}/>
                            </Col>
                            <Col>
                                <Card.Text className="text-left profile-text">Number of clothing items: {count}</Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Profile;