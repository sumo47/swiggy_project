import React from 'react' //why we are importing React //* impr
import PropTypes from 'prop-types' //* impt


export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx6rMX_nxxUpowPPKZTQjbDsopE2OEF-LJmO8jUrxC_g&s" alt="Flowers in Chania" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Others</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/">{props.Location}</a>
                        </li>
                        <form className="d-flex search" >
                            <i class="bi bi-search"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </ul>

                </div>
            </div>
        </nav>
    )
}


Navbar.propType = {                                 // Rules to avoid error
    title: PropTypes.string.isRequired,
    Location: PropTypes.string
}

Navbar.defaultProps = {                        //Default props
    title: "Set Title here",
    about: "Set about here"
}