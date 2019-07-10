import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SignUpForm extends Component {
    state = {
        name: "",
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
        const {name, email, password} = this.state;
        const {handleSignUp} = this.props;
        try {
            await handleSignUp({name, email, password})
        } catch (err) {
            throw err
        }
    }

    render() {
        const {name, email, password} = this.state;
        const {isSignedIn} = this.props;
        if(isSignedIn) {
            return (
                <Redirect to="/profile"/>
            )
        }
        return (
            <div className="signup">
                <Card style={{width: '25rem'}}>
                    <Card.Header>Sign Up</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Enter name" value={name} onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" value={email} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Enter password" value={password} onChange={this.handleChange} />
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