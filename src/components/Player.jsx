import { useState, useRef } from "react"

export default function Player() {
	const playerName = useRef()
	const [entredPlayerName, setEntredPlayerName] = useState("")

	function handleClick() {
		console.log(playerName.current.value)
		setEntredPlayerName(playerName.current.value)
	}

	return (
		<section id='player'>
			<h2>Welcome {entredPlayerName ? entredPlayerName : "unknown entity"}</h2>
			<p>
				<input ref={playerName} type='text' />
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	)
}
