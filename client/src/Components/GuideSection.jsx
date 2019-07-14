import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';

class GuideSection extends Component {
    render() {
        const {heading, optionsList} = this.props;
        return (
            <Accordion>
                <Card className="rounded mb-0 border">
                    <Accordion.Toggle as={Card.Header} eventKey="0">{heading}</Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <ListGroup variant="flush">
                            {optionsList.map(option => {
                                return (
                                    <ListGroup.Item key={option.id}>
                                        <Row>
                                            <Col xs={4} className="symbol-guide-placement">
                                                <Card.Text><i className={`icon icon-${option.name} symbol-size`}></i></Card.Text>
                                            </Col>
                                            <Col xs={8} className="text-left">
                                                <Card.Text>{option.about}</Card.Text>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}

export default GuideSection;