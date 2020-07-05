import React from 'react'
import '../../App.css'
const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom" >
            <a className="navbar-brand" href="/"><i className="fas fa-id-card-alt mr-1"></i> Eracost</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
                <div className="navbar-nav navbar-right  text-white">
                    <a className="nav-item nav-link active text-white" href="/register">Register</a>
                    <a className="nav-item nav-link active text-white" href="/login">Login</a>
                    <a className="nav-item nav-link active text-white" href="/about">About</a>
                </div>
            </div>
        </nav>
    )

}
export default Navbar
// #3f51b5