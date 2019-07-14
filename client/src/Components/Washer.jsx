// Got getNestedObject function from https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';

class Washer extends Component {
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
        const newArr = arr.filter(item => item[key] === value);
        return newArr.filter(item => this.getNestedObject(item, [option, key2]) === value2);
    }

    render() {
        const {clothes} = this.props;
        const {getNestedObject, filterArr, filterArrExtra} = this;
        const machineWashLights = filterArrExtra(clothes, 'shadeCategory', 'light', 'washoption', 'type', 'machine wash');
        const machineWashDarks = filterArrExtra(clothes, 'shadeCategory', 'dark', 'washoption', 'type', 'machine wash');
        const machineWashMixed = filterArrExtra(clothes, 'shadeCategory', 'mixed', 'washoption', 'type', 'machine wash');
        const handWash = filterArr(clothes, 'washoption', 'type', 'hand wash');
        const dontWash = filterArr(clothes, 'washoption', 'canWash', false);
        return (
            <div className="washer">
                <Card className="gap" border="warning" style={{width: '20rem'}}>
                    <h1>Washer Page</h1>
                </Card>
                <Card style={{width: '100%'}} className="text-left">
                    <Card.Body>
                        <Accordion className="gap">
                            <Card className="rounded mb-0 border">
                                <Accordion.Toggle as={Card.Header} eventKey="0"><h3>Machine Wash</h3></Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="profile-text">
                                        <Card className="gap">
                                            <Card.Header>Lights</Card.Header>
                                            <Card.Body>
                                                <Table bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>Clothing Item</th>
                                                            <th>Cycle</th>
                                                            <th>Water Temperature</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {machineWashLights.map(item => {
                                                            return (
                                                                <tr key={item.id}>
                                                                    <td><Link to={`/closet/${item.id}`}>{item.description}</Link></td>
                                                                    <td>{getNestedObject(item, ['washoption', 'cycle'])}</td>
                                                                    <td>{getNestedObject(item, ['washoption', 'waterTemp'])}</td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </Table>
                                            </Card.Body>
                                        </Card>
                                        <Card className="gap">
                                            <Card.Header>Darks</Card.Header>
                                            <Card.Body>
                                                <Table bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>Clothing Item</th>
                                                            <th>Cycle</th>
                                                            <th>Water Temperature</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {machineWashDarks.map(item => {
                                                            return (
                                                                <tr key={item.id}>
                                                                    <td><Link to={`/closet/${item.id}`}>{item.description}</Link></td>
                                                                    <td>{getNestedObject(item, ['washoption', 'cycle'])}</td>
                                                                    <td>{getNestedObject(item, ['washoption', 'waterTemp'])}</td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </Table>
                                            </Card.Body>
                                        </Card>
                                        <Card className="gap">
                                            <Card.Header>Mixed</Card.Header>
                                            <Card.Body>
                                                <Table bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>Clothing Item</th>
                                                            <th>Cycle</th>
                                                            <th>Water Temperature</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {machineWashMixed.map(item => {
                                                            return (
                                                                <tr key={item.id}>
                                                                    <td><Link to={`/closet/${item.id}`}>{item.description}</Link></td>
                                                                    <td>{getNestedObject(item, ['washoption', 'cycle'])}</td>
                                                                    <td>{getNestedObject(item, ['washoption', 'waterTemp'])}</td>
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
                                <Accordion.Toggle as={Card.Header} eventKey="0"><h3>Hand Wash</h3></Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="profile-text">
                                        <Table bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Clothing Item</th>
                                                    <th>Water Temperature</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {handWash.map(item => {
                                                    return (
                                                        <tr key={item.id}>
                                                            <td><Link to={`/closet/${item.id}`}>{item.description}</Link></td>
                                                            <td>{getNestedObject(item, ['washoption', 'waterTemp'])}</td>
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
                                <Accordion.Toggle as={Card.Header} eventKey="0"><h3>Don't Wash</h3></Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="profile-text">
                                        <ListGroup>
                                            {dontWash.map(item => {
                                                return <ListGroup.Item key={item.id}><Link to={`/closet/${item.id}`}>{item.description}</Link></ListGroup.Item>
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

export default Washer;