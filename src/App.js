import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TodoApp from "./components/TodoApp/TodoApp";
import Home from "./components/Home/Home";
import Wanderlink from "./components/Wanderlink/Wanderlink";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
	return (
		<Router>
			<Container>
				<Navbar />
				<Switch>
					<Route path="/todoapp">
						<TodoApp />
					</Route>
					<Route path="/wanderlink">
						<Wanderlink />
					</Route>
					<Route path="/" exact>
						<Home />
					</Route>
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
