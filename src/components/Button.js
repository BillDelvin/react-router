import React from "react";
import { Button } from "react-bootstrap";

const button = (props) => {

	return (
		<Button variant="success" name={props.name}>
			{props.children}
		</Button>
	);
};

export default button;
