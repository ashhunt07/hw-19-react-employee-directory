import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaGithub } from 'react-icons/fa';
import './style.css';

function Title(props) {
  return (
    <header className="jumbotron">
        <div>
            <Navbar className="justify-content-between">
                <Navbar.Brand>
                  <FaGithub />
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="https://github.com/GedalyaKrycer/unit-19-react-homework-employee-directory" target="_Blank"><FaGithub className="github-icon" /></Nav.Link>
                </Nav>

            </Navbar>
            <h1 className="text-center title">{props.children}</h1>
        </div>
    </header>
)
}



export default Title;
