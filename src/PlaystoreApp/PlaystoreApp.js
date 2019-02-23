import React from 'react';
import './PlaystoreApp.css';

export default function PlaystoreApp(props) {
	return (
		<div className="playstore-apps">
			<h2>{props.App}</h2>
			{/* <div className="book_author">by {props.author}</div> */}
			{/* <div className="book_publisher">
				Published by: {props.publisher}
				on {moment(props.published_date).format('DD MMM YYYY')}
			</div> */}
			{/* <div className="book_description">{props.description}</div> */}
			{/* <div className="book_details">Rank {props.rank} this week</div> */}
		</div>
	);
}
