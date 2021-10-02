import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Employee = () => {

    const [empolyeeDetails, setEmployeeDetails] = useState([])
    const [foundEmployee, setFoundEmployee] = useState({})

    useEffect(() => {
        fetch('/employeeDetails.json')
            .then(res => res.json())
            .then(data => setEmployeeDetails(data.employee))
    }, [])

    useEffect(() => {
        const matchedEmployee = empolyeeDetails.find
            (employee => employee.login.id === id)
        setFoundEmployee(matchedEmployee)
    }, [empolyeeDetails])


    const { id } = useParams()
    return (
        <div className="my-5">

            <Container>
                <Row>
                    <Col md={3}>
                        <Card>
                            <Card.Img variant="top" className="p-3" src={foundEmployee?.picture?.thumbnail} />
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Title>{foundEmployee?.name}</Card.Title>
                                <Card.Text>

                                    <b>Gender: {foundEmployee?.gender}</b>
                                    <p><b>{foundEmployee?.email}</b></p>
                                    <b>{foundEmployee?.phone}</b>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>




        </div>
    );
};

export default Employee;