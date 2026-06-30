// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import { useState } from 'react';
import AddTask from './MyComponents/AddTask';

// It is where all the components are listed and are there placed into the app.
function App() {

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo.sno);
    // We are deleting the todo from the array but it is not reflecting the changes on the app as it is by default a stateless hook and we'll need to use a state hook to make the changes in the UI. So, we need to use the useState hook to make the changes in the UI. The useState hook is used to create a state variable and a function to update the state variable. The state variable is used to store the data and the function is used to update the data.
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    // console.log(todos);
    // For this we'll firstly need to import the useState hook from react and then we'll need to use the useState hook to create a state variable and a function to update the state variable. The state variable is used to store the data and the function is used to update the data. The useState hook takes an initial value as an argument and returns an array with two elements. The first element is the state variable and the second element is the function to update the state variable. The function to update the state variable takes a new value as an argument and updates the state variable with the new value. The useState hook is used to create a state variable and a function to update the state variable. The state variable is used to store the data and the function is used to update the data.
    // Filter is a higher order array function that filters the array based on the condition or the input provided. we'll use that function and filter out the todo/task that is to be deleted and then setTodos function will simply set the todos array to the filtered array and the UI will be updated accordingly. The filter function takes a callback function as an argument and the callback function takes an element of the array as an argument and returns a boolean value. If the boolean value is true then the element is included in the new array and if the boolean value is false then the element is excluded from the new array.
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  const addTask = (title, description)=> {
        let sno = todos.length+1;
        const newTask = {
            sno: sno,
            title: title,
            desc: description,
        }
        console.log("Adding a task with title: ", title, " and description: ", description, newTask);

        setTodos([...todos, newTask]);
    }

  const [todos, setTodos] = useState(
    []
  );

  // const todos = [
  //   {
  //     sno: 1,
  //     title: "Go to the market",
  //     desc: "You need to go to the market to get this job done"
  //   },
  //   {
  //     sno: 2,
  //     title: "Go to the mall",
  //     desc: "You need to go to the mall to get this job done"
  //   },
  //   {
  //     sno: 3,
  //     title: "Go to the shop",
  //     desc: "You need to go to the shop to get this job done"
  //   },
  // ]
  return (
    <>
      {/* The props object attributes can be passed along with calling the child component. */}
      <Header title="Todos List" searchBar={false} />
      <AddTask addTask={addTask} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />

    </>

    // This is written in jsx (Javascript Syntax Extension). Used to insert dynamic HTML content into the JavaScript codes. 
    // As className is a keyword in JavaScript, we use classNameName instead of className to define the className of an element in JSX.


    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <div>{myVariable}</div>
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // Everything returned from this function should be enclosed in some tag. If not available then we can use React.Fragment or <> </> to enclose the returned content.
    // <>

    // {/* Bootstrap NavBar */}
    // {/* Getting this in the Header.js */}
    //       {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">Todos List</a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">About</a>
    //         </li>
    //       </ul>
    //       <form className="d-flex" role="search">
    //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //         <button className="btn btn-outline-success" type="submit">Search</button>
    //       </form>
    //     </div>
    //   </div>
    // // </nav> */}


    //     //   {/* <h3>This is heading 3</h3>
    //     //   <p>This is a paragraph</p>
    //     // </> */}
  );
}

export default App;
