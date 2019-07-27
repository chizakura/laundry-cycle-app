import React, {Component} from 'react';
import profilePic from '../Images/default-avatar-png-6.png';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Profile extends Component {
    // state = {
    //     avatar: ""
    // }

    componentDidMount(){
        const {handleClothes} = this.props;
        const userId = localStorage.getItem('userId');
        handleClothes(userId)
    }

    // handleUpload = (event) => {
    //     const {name, value} = event.target;
    //     // const objectUrl = URL.createObjectURL(value);
    //     // console.log(objectUrl)
    //     this.setState({
    //         [name]: value
    //     })
    // }

    render() {
        const {user, count} = this.props;
        return (
            <div className="profile">
                <Card>
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Row>
                            <Col className="gap" xs={12} md={6}>
                                <Card.Title><h3>{user.name}</h3></Card.Title>
                                <Card.Img className="profile-pic" src={profilePic}/>
                            </Col>
                            <Col xs={12} md={6}>
                                <Card.Text className="text-left profile-text">Number of clothing items: {count}</Card.Text>
                                {/* <form>
                                    <label>Choose a profile picture:</label>
                                    <br></br>
                                    <input type="file" name="avatar" accept="image/png, image/jpeg" value={this.state.avatar} onChange={this.handleUpload}></input>
                                    <br></br>
                                    <input type="submit"/>
                                </form> */}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Profile;