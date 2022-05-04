import React from 'react';

const T20Players = ['Sachin1', 'Dhoni2', 'Virat3'];
const RanjiThrophyPlayers = ['Rohit4', 'Yuvraj5', 'Raina6'];
export const IndianPlayers = [...T20Players, ...RanjiThrophyPlayers];
const InPlayers = ['First Player', 'Second Player', 'Third Player', 'Fourth Player', 'Fifth Player', 'Sixth Player'];


export function OddPlayers([first, , third, , fifth]) {
	return (
		<div>
			<li>First:{first}</li>
			<li>Third:{third}</li>
			<li>Fifth:{fifth}</li>
			</div>)

}
export function EvenPlayers([,second, ,fourth,,sixth]) {
	return (
		<div>
			<li>Second:{second}</li>
			<li>Fourth:{fourth}</li>
			<li>Sixth:{sixth}</li>
		</div>)
}
export function ListOfIndianPlayers() {
	return InPlayers.map((item) => {
		return (
			< div>
				<li>Mr.{item}</li>
			</div>)
	})
}


