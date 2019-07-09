import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <Card style={{width: '25rem'}}>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Enter password"/>
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