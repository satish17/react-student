
import Header from "../template/header";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Students() {


    const [students, setStudents] = useState([
        { "id" : 1, "firstname": "satish", "lastname": "mk", "username": "satish" },
        { "id" : 2, "firstname": "manju", "lastname": "vk", "username": "manju" },
        { "id" : 3, "firstname": "vinay", "lastname": "sd", "username": "vinay" }
    ]);

    const [addStudent, setAddStudent] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [rowId, setRowId] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const editStident = (id) => {

        const row = students.filter( i => i.id == id);
        console.log(id, row)
        setFirstname(row[0].firstname)
        setLastname(row[0].lastname)
        setUsername(row[0].username)
        setRowId(id)
        handleShow()
    }

    const addStudentDetails = () => {

        console.log(students)
        var count = students.length;
        if(rowId == "")
        {
            var stu = {  "id" : (count + 1) ,"firstname": firstname, "lastname": lastname, "username": username }
            setStudents([...students, stu])
        }else{
            
            const row = students.filter( i => i.id != rowId);
            var stu = {  "id" : rowId ,"firstname": firstname, "lastname": lastname, "username": username }
            setStudents([...row, stu])

        }
       
        handleClose()
        setUsername("")
        setFirstname("")
        setLastname("")
    }
    return (
        <div className="App">
            <Header />
            <h1>Students</h1>

            <Table striped bordered hover>
                <thead>
                    <tr key={-1}>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    { students && students.map((data, index) => (
                        <>
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.firstname}</td>
                                <td>{data.lastname}</td>
                                <td>{data.username}</td>
                                <td> <Button size="xs" variant="info" onClick={(e) => editStident(data.id)}>Edit</Button></td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </Table>

            <Button variant="primary" onClick={handleShow}>Add Student</Button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                autoFocus
                                value={firstname}
                                onChange={ (e) => setFirstname(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                
                                value={lastname}
                                onChange={ (e) => setLastname(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>UserName</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                
                                value={username}
                                onChange={ (e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={ (e) => addStudentDetails()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default Students;

