import React from "react";
import { Signup } from "../Auth/Signup";
import { Login } from "../Auth/Login";
import { Account } from "../Auth/Account";
import { WhatsApp } from "../WhatsApp";
import { Button } from "react-bootstrap";
function Home() {
    return (
        <React.Fragment>
            <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item"><a href="https://gi.com" className="nav-link link-dark px-2 active" aria-current="page">Home</a></li>
                        <li className="nav-item"><a href="https://gi.com" className="nav-link link-dark px-2">Features</a></li>
                        <li className="nav-item"><a href="https://gi.com" className="nav-link link-dark px-2">Pricing</a></li>
                        <li className="nav-item"><a href="https://gi.com" className="nav-link link-dark px-2">FAQs</a></li>
                        <li className="nav-item"><a href="https://gi.com" className="nav-link link-dark px-2">About</a></li>
                    </ul>
                    <ul className="nav">
                        <li className="nav-item">
                        <Button type="button" variant="primary">Log in</Button>
                            </li>
                        <li className="nav-item">
                        <Button type="button" variant="primary">Sign up</Button>
                   
                            </li>
                    </ul>
                </div>
            </nav>
            <header className='App-header'>
                <Account>
                    <Signup />
                    <Login />
                    <WhatsApp />
                </Account>
            </header>
        </React.Fragment>
    );
}
export { Home };