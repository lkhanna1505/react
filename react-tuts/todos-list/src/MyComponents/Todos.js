import React from 'react'
import Task from './Task'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const Todos = (props) => {

    let newStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    const [show, setShow] = useState(true);
    // const [show, setShow] = useState(true);
    return (
        <div className='container' style={newStyle}>
            <h1>Task List</h1>
            {/* {props.todos.map((todo) => (
          <Task key={todo.sno} todo={todo} />
        ))} */}
            {
                props.todos.length === 0 ?
                    <>
                        {/* <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                            <p>
                                Change this and that and try again. Duis mollis, est non commodo
                                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                                Cras mattis consectetur purus sit amet fermentum.
                            </p>
                        </Alert> */}

                            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                <Alert.Heading>Oh snap! no tasks to display</Alert.Heading>
                                <p>
                                    You have completed all your tasks. Add some new tasks to get.
                                </p>
                            </Alert>
                        
                    </> :
                    props.todos.map((todo) => (
                        <Task key={todo.sno} todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    ))}



        </div>
    )
}

export default Todos
