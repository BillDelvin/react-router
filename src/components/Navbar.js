import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const navbar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">Todo App</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Link className="nav-link" to="/">
						Home
					</Link>
					<Link className="nav-link" to="todoapp">
						Todo App
					</Link>
					<Link className="nav-link" to="wanderlink">
						Wander Link
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default navbar;
