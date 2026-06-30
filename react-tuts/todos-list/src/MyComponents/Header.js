import React from 'react'
import PropTypes from 'prop-types'

// {/* Props are used to pass data and parameters from the parent to the actual child object. */}
export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* the props is just a object and it's attributes can be used accordingly */}
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
            {/* Ternary operator can be used to add basic if and else in jsx */}
            {props.searchBar ? <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> : <form className="d-flex" role="search">
              <input disabled className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit" disabled>Search</button>
            </form>}
          </div>
        </div>
      </nav>
    </div>
  )
}

// The defaultProps is used to set the default values for the props object attributes. If the props object attributes are not passed then the default values will be used.
Header.defaultProps = {
  title: "Your Title Here",
// As the searchBar is a set as isRequired in the propTypes object, it is not set in the defaultProps object. If it is set then it will throw an error in the console as the searchBar is set as isRequired in the propTypes object.
  // searchBar: false
}

// They are used to set the datatypes for the inputs of the props object attributes. If the datatype is not as expected then it will throw an error in the console.
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}