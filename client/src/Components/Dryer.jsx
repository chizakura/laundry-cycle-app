// Got getNestedObject function from https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';

class Dryer extends Component {
    componentDidMount(){
        const {handleClothes} = this.props;
        const userId = localStorage.getItem('userId');
        handleClothes(userId)
    }

    getNestedObject = (nestedObj, pathArr) => {
        return pathArr.reduce((obj, key) =>
            (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj)
    }

    filterArr = (arr, option, key, value) => {
        return arr.filter(item => this.getNestedObject(item, [option, key]) === value);
    }

    filterArrExtra = (arr, key, value, option, key2, value2) => {
        const newArr = arr.filter(item => this.getNestedObject(item, [option, key]) === value);
        return newArr.filter(item => this.getNestedObject(item, [option, key2]) === value2);
    }

    render() {
        const {clothes} = this.props;
        const {getNestedObject, filterArr, filterArrExtra} = this;
        const tumbleDryLow = filterArr(clothes, 'dryoption', 'heatLevel', 'low');
        const tumbleDryMedium = filterArr(clothes, 'dryoption', 'heatLevel', 'medium');
        const tumbleDryHigh = filterArr(clothes, 'dryoption', 'heatLevel', 'high');
        const noHeat = filterArrExtra(clothes, 'heatLevel', 'none', 'dryoption', 'type', 'tumble dry');
        const lineDry = filterArr(clothes, 'dryoption', 'type', 'line dry');
        const noDry = filterArr(clothes, 'dryoption', 'canTumbleDry', false);
        return (
            <div className="dryer">
                <Card className="gap" border="warning" style={{width: '18rem'}}>
                    <h1>Dryer Page</h1>
                </Card>
                <Card style={{width: '100%'}} className="text-left">
                    <Card.Body>
                        <Accordion className="gap">
                            <Card className="rounded mb-0 border">
                                <Accordion.Toggle as={Card.Header} eventKey="0"><h3>Tumble Dry</h3></Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="profile-text">
                                        <Card className="gap">
                                            <Card.Header>Low Heat</Card.Header>
                                            <Card.Body>
                                                <Table bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>Clothing Item</th>
                                                            <th>Setting</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {tumbleDryLow.map(item => {
                                                            return (
                                                                <tr key={item.id}>
                                                                    <td><Link to={`/closet/${item.id}`}>{item.description}</Link></td>
                                                                    <td>{getNestedObject(item, ['dryoption', 'setting'])}</td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </Table>
                                            </Card.Body>
                                        </Card>
                                        <Card className="gap">
                                            <Card.Header>Medium Heat</Card.Header>
                                            <Card.Body>
                                                <Table bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>Clothing Item</th>
                                                            <th>Setting</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {tumbleDryMedium.map(item => {
                                                            return (
                                                                <tr key={item.id}>
                                                                    <td><Link to={`/closet/${item.id}`}>{item.description}</Link></td>
                                                                    <td>{getNestedObject(item, ['dryoption', 'setting'])}</td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </Table>
                                            </Card.Body>
                                        </Card>
                                        <Card className="gap">
                                            <Card.Header>High Heat</Card.Header>
                                            <Card.Body>
                                                <Table bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>Clothing Item</th>
                                                            <th>Setting</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {tumbleDryHigh.map(item => {
                                                            return (
                                                                <tr key={item.id}>
                                                                    <td><Link to={`/closet/${item.id}`}>{item.description}</Link></td>
                                                                    <td>{getNestedObject(item, ['dryoption', 'setting'])}</td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </Table>
                                            </Card.Body>
                                        </Card>
                                        <Card className="gap">
                                            <Card.Header>No Heat</Card.Header>
                                            <Card.Body>
                                                <Table bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>Clothing Item</th>
                                                            <th>Setting</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {noHeat.map(item => {
                                                            return (
                                                                <tr key={item.id}>
                                                                    <td><Link to={`/closet/${item.id}`}>{item.description}</Link></td>
                                                                    <td>{getNestedObject(item, ['dryoption', 'setting'])}</td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </Table>
                                            </Card.Body>
                                        </Card>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion className="gap">
                            <Card className="rounded mb-0 border">
                                <Accordion.Toggle as={Card.Header} eventKey="0"><h3>Line Dry</h3></Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="profile-text">
                                        <Table bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Clothing Item</th>
                                                    <th>How to Care for Item</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {lineDry.map(item => {
                                                    return (
                                                        <tr key={item.id}>
                                                            <td><Link to={`/closet/${item.id}`}>{item.description}</Link></td>
                                                            <td>{getNestedObject(item, ['dryoption', 'about'])}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion className="gap">
                            <Card className="rounded mb-0 border">
                                <Accordion.Toggle as={Card.Header} eventKey="0"><h3>Don't Tumble Dry</h3></Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="profile-text">
                                        <ListGroup>
                                            {noDry.map(item => {
                                                return <ListGroup.Item key={item.id}><Link to={`'/closet/${item.id}`}>{item.description}</Link></ListGroup.Item>
                                            })}
                                        </ListGroup>
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