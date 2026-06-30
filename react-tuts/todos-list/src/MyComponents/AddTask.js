import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddTask = (props) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    let submit = (e) => {
        e.preventDefault();
        if(!title || !description){
            alert("Title or Description cannot be blank");
        }
        // console.log("Adding a task with title: ", title, " and description: ", description);
        props.addTask(title, description);
    }



    return (
        <Form className="container my-3" onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>
                    <h3>
                        Task Name
                    </h3>
                </Form.Label>
                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter task name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                    <h3>
                        Task Description
                    </h3>
                </Form.Label>
                <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter task description" />
            </Form.Group>
            <Button variant="success" type="submit">
                Add
            </Button>
        </Form>
    );
}

export default AddTask
