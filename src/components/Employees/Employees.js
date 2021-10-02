import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Form, FormControl, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Employees = () => {
    const [employees, setEmployees] = useState([])
    const [searchedEmployee, setSearchedEmployee] = useState([])



    useEffect(() => {
        fetch('./employeeData.json')
            .then(res => res.json())
            .then(data => {
                setEmployees(data);
                setSearchedEmployee(data);
            })
    }, []);

    const handleSearch = (event) => {
        const searchText = event.target.value.toLowerCase();
        const matchedEmployee = employees.filter(employee => employee.name.toLowerCase().includes(searchText))
        setSearchedEmployee(matchedEmployee)
    }


    return (

        <Container>
            <Form className="d-flex my-3 w-50" onChange={handleSearch}>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
            </Form>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        searchedEmployee.map(employee => (
                            <tr>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.designation}</td>
                                <td>
                                    <NavLink
                                        to={`/employee/${employee?.id}`}
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "red"
                                        }}
                                    >Details
                                    </NavLink>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default Employees;