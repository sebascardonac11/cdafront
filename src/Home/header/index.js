import React from "react";
import { Button } from 'react-bootstrap';
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
                        <li className="nav-item"><a href="https://gi.com" className="nav-link link-dark px-2">Login</a></li>
                        <li className="nav-item"><a href="https://gi.com" className="nav-link link-dark px-2">Sign up</a></li>
                    </ul>
                </div>
            </nav>
            <header className='App-header'>
                <h1>Fist react</h1>
                <Button variant="primary">Acceder</Button>
            </header>
        </React.Fragment>
    );
}
export { Home };