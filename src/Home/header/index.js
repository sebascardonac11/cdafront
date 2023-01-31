import React from "react";
import { Button } from 'react-bootstrap';
function Home() {
    return (
        <React.Fragment>
            <nav class="py-2 bg-light border-bottom">
                <div class="container d-flex flex-wrap">
                    <ul class="nav me-auto">
                        <li class="nav-item"><a href="https://gi.com" class="nav-link link-dark px-2 active" aria-current="page">Home</a></li>
                        <li class="nav-item"><a href="https://gi.com" class="nav-link link-dark px-2">Features</a></li>
                        <li class="nav-item"><a href="https://gi.com" class="nav-link link-dark px-2">Pricing</a></li>
                        <li class="nav-item"><a href="https://gi.com" class="nav-link link-dark px-2">FAQs</a></li>
                        <li class="nav-item"><a href="https://gi.com" class="nav-link link-dark px-2">About</a></li>
                    </ul>
                    <ul class="nav">
                        <li class="nav-item"><a href="https://gi.com" class="nav-link link-dark px-2">Login</a></li>
                        <li class="nav-item"><a href="https://gi.com" class="nav-link link-dark px-2">Sign up</a></li>
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