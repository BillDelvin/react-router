import React from "react";
import { Col, Card, Button } from "react-bootstrap";

const Item = (props) => {
	console.log(props.data);
	const { data } = props;
	return (
		<Col>
			<Card>
				<Card.Img
					style={{ height: "100px" }}
					variant="top"
					src={`http://35.240.201.155:3000/${data.images[0]}`}
				/>
				<Card.Body>
					<Card.Title>{data.destinationName}</Card.Title>
					<Card.Text>{data.address}</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Item;
