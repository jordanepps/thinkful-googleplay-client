import React from 'react';
import './PlaystoreApp.css';

export default function PlaystoreApp(props) {
	return (
		<div className="playstore-apps">
			<h2>{props.App}</h2>
			<h3>Rating: {props.Rating}</h3>
		</div>
	);
}
