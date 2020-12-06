import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FaCat } from 'react-icons/fa';
import './style.css';

function Title() {
    return (
    <header className="jumbotron">
        <div>
            <Navbar className="justify-content-left">
                <Navbar.Brand>
                    <h3> <FaCat size={30}/>&emsp;RandomCat</h3>
                </Navbar.Brand>

            </Navbar>
            <h1 className="text-center title">Your Employee List</h1>

        </div>
    </header>
)
}



export default Title;
