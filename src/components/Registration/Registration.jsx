import React, { useState } from 'react'
import { Form, Alert } from 'react-bootstrap';
import Login from '../Login/Login';
import './Registration.css';
import 'bootstrap/dist/css/bootstrap.css';


function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);




    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("hardikSubmissionEmail", JSON.stringify(email));
            localStorage.setItem("hardikSubmissionPassword", JSON.stringify(password));
            console.log("Saved in Local Storage");

            setLogin(!login)

        }

    }

    // Directly to the login page
    function handleClick() {
        setLogin(!login)
    }


    return (
        <>
        <section className="vh-100 bg-image" >
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card">
                                 <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                {info ? <div> {login ?
                                <form onSubmit={handleFormSubmit}>

                                <div className="form-outline mb-4">
                                    <input type="text" id="form3Example1cg" className="form-control form-control-lg" name="name" onChange={(event) => setName(event.target.value)} />
                                    <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3cg" className="form-control form-control-lg" onChange={(event) => setEmail(event.target.value)} />
                                    <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="password" id="form3Example4cg" className="form-control form-control-lg" onChange={(event) => setPassword(event.target.value)} />
                                    <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                </div>

                                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body" onClick={handleClick}><u>Login here</u></a></p>
                                {flag &&
                                    <Alert color='primary' variant="danger" >
                                    I got it you are in hurry! But every Field is important!
                                    </Alert>
                                }
                                </form>: <Login />}
                                </div>: <div>
                    <p><strong>Company:</strong> Geeksynergy Technologies PVT Ltd</p>
                    <p><strong>Address:</strong> Sanjaynagar, Bengaluru-56</p>
                    <p><strong>Phone:</strong> XXXXXXXXXX09</p>
                    <p><strong>Email:</strong> XXXXXXXX@gmail.com</p>
                </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Registration
