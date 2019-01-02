import React from 'react';
import Card from './Card';

//Function that accept robots
const CardList = ({robots}) => {
	return (
		<div>
		{
			//Looping through robots 
			//Content get pushed into cardArray automatically
			//Two parameters in map, first is the content then the index
			robots.map((user,i) => {
				return <Card 
				key={i} 
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email}/>;
			})
		}
		</div>
	)
}

export default CardList;