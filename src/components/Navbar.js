import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

    render() {
        return (
            <>
                <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`} style={{ padding: '12px 0px' }}>
                    <div className="container-fluid">
                        <Link className="navbar-brand mx-3" to="/general"><h2>NewsToday</h2></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active" to="/business">Business</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active" to="entertainment">Entertainment</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active" to="/general">General</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active" to="/health">Health</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active" to="/science">Science</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active" to="/sports">Sports</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active" to="/technology">Technology</Link>
                                </li>

                            </ul>
                            <form className="d-flex justify-content-between">
                                <div className="form-check form-switch mx-3">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={this.props.changeMode} />
                                    <label className={`form-check-label text-${this.props.txtColor}`} htmlFor="flexSwitchCheckDefault">{this.props.changeText} Dark Mode</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}






