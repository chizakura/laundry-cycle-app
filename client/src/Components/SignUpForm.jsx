import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SignUpForm extends Component {
    render() {
        return (
            <div className="signup">
                <Card style={{width: '25rem'}}>
                    <Card.Header>Sign Up</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Enter name" required/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="text" placeholder="Enter email" required/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="text" placeholder="Enter password" required/>
                            </Form.Group>
                            <Button variant="outline-secondary" type="submit">Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default SignUpForm;