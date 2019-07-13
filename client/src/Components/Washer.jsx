import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

class Washer extends Component {
    render() {
        return (
            <div className="washer">
                <Card className="gap" border="warning" style={{width: '20rem'}}>
                    <h1>Washer Page</h1>
                </Card>
                <Card style={{width: '100%'}} className="text-left">
                    <Card.Body>
                        <Accordion className="gap">
                            <Card className="rounded mb-0 border">
                                <Accordion.Toggle as={Card.Header} eventKey="0"><h3>Type</h3></Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Text>
                                            <h4>Machine Wash</h4>
                                            <h4>Hand Wash</h4>
                                            <h4>Do Not Wash</h4>
                                        </Card.Text>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion className="gap">
                            <Card className="rounded mb-0 border">
                                <Accordion.Toggle as={Card.Header} eventKey="0"><h3>Cycle</h3></Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Text>
                                            <h4>Normal</h4>
                                            <h4>Permanent Press</h4>
                                            <h4>Gentle</h4>
                                            <h4>None</h4>
                                            <h4>Any</h4>
                                        </Card.Text>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion className="gap">
                            <Card className="rounded mb-0 border">
                                <Accordion.Toggle as={Card.Header} eventKey="0"><h3>Water Temperature</h3></Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Text>
                                            <h4>Cold</h4>
                                            <h4>Warm</h4>
                                            <h4>Hot</h4>
                                            <h4>None</h4>
                                            <h4>Any</h4>
                                        </Card.Text>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion className="gap">
                            <Card className="rounded mb-0 border">
                                <Accordion.Toggle as={Card.Header} eventKey="0"><h3>List of Don't Wash Clothes</h3></Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Card.Text>
                                            <h4>Not Washable</h4>
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

export default Washer;