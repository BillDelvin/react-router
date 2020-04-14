import React, { Component } from "react";
import { Row } from "react-bootstrap";
import axios from "axios";
import Item from "./Item";

class Wanderlink extends Component {
	state = {
		data: [],
	};

	componentDidMount() {
		axios
			.get("http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination ")
			.then((res) => {
				this.setState({ data: res.data });
			});
	}

	render() {
		let showData = this.state.data.map((item, id) => {
			return <Item key={id} data={item} />;
		});

		return (
			<div>
				<h1>Wanderlink</h1>
				<Row>{showData}</Row>
			</div>
		);
	}
}

export default Wanderlink;
