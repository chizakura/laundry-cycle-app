import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';

class ShowTable extends Component {
    render() {
        const {tableHeading, tableData, getNestedObject, option, keyOne, keyTwo} = this.props;
        return (
            <Table bordered hover responsive>
                <thead>
                    <tr>
                        {tableHeading.map((item, index) => {
                            return <th key={index}>{item}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(item => {
                        return (
                            <tr key={item.id}>
                                <td><Link to={`/closet/${item.id}`}>{item.description}</Link></td>
                                <td>{getNestedObject(item, [option, keyOne])}</td>
                                <td>{getNestedObject(item, [option, keyTwo])}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}

export default ShowTable;