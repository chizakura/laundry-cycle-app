import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        const {handleLogin} = this.props;

        try {
            await handleLogin({email, password})
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const {email, password} = this.state;
        const {isSignedIn} = this.props;
        if(isSignedIn) {
            return <Redirect to="/"/>
        }
        return (
            <div className="login">
                <Card style={{width: '25rem'}}>
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" value={email} onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Enter password" value={password} onChange={this.handleChange}/>
                            </Form.Group>
                            <Button variant="outline-secondary" type="submit">Login</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Login;