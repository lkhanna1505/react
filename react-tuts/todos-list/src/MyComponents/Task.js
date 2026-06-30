import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Task(props) {
  return (
    <div className='container my-3'>
      {/* <p>This is a single todo item.</p>
      <h1>S.No: {props.todo.sno}</h1>
      <h3>{props.todo.title}</h3>
      <p>{props.todo.desc}</p>
      <button className="btn btn-danger btn-sm">Delete</button> */}


      <Card xs={12} md={6} className="mb-4">
        <Card.Header as="h5">S.No: {props.todo.sno}</Card.Header>
        <Card.Body>
          <Card.Title>{props.todo.title}</Card.Title>
          <Card.Text>
            {props.todo.desc}
          </Card.Text>
          {/* If onDelete is not passed in another arrow function it will be directly executed during the execution or runtime. To avoid that and have it work only during the click event, we use an arrow function. */}
          <button className="btn btn-danger btn-sm" onClick={() => { props.onDelete(props.todo) }}>Delete</button>
        </Card.Body>
      </Card>

    </div>
  )
}
