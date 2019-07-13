import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

class Dryer extends Component {
    render() {
        return (
            <div className="dryer">
                <Card className="gap" border="warning" style={{width: '18rem'}}>
                    <h1>Dryer Page</h1>
                </Card>
                <Card style={{width: '100%'}} className="text-left">
                    <Card.Body>
                        <Accordion className="gap">
                            <Card className="rounded mb-0 border">
                                <Accordion.Toggle as={Card.Header} eventKey="0"><h3>Type</h3></Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Text>
                                            <h4>Tumble Dry</h4>
                                            <h4>Line Dry</h4>
                                            <h4>Do Not Tumble Dry</h4>
                                        </Card.Text>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion className="gap">
                            <Card className="rounded mb-0 border">
                                <Accordion.Toggle as={Card.Header} eventKey="0"><h3>Setting</h3></Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Text>
                                            <h4>Normal</h4>
                                            <h4>Permanent Press</h4>
                                            <h4>Gentle</h4>
                                            <h4>None</h4>
                                        </Card.Text>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion className="gap">
                            <Card className="rounded mb-0 border">
                                <Accordion.Toggle as={Card.Header} eventKey="0"><h3>Heat Level</h3></Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Text>
                                            <h4>Low</h4>
                                            <h4>Medium</h4>
                                            <h4>High</h4>
                                            <h4>None</h4>
                                            <h4>Any</h4>
                                        </Card.Text>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion className="gap">
                            <Card className="rounded mb-0 border">
                                <Accordion.Toggle as={Card.Header} eventKey="0"><h3>List of Dry Clean Clothes</h3></Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Text>
                                            <h4>Dry Clean Only</h4>
                                        </Card.Text>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Dryer;