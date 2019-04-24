import React, { Component } from "react";
import "../css/Main.css";
import DrumMachine from "../Components/DrumMachine";

class Main extends Component {
	render() {
		return (
			<div className="App">
				<h2>
					{" "}
					PLAY MUSIC! <i class="fas fa-music" />
				</h2>
				<DrumMachine />
			</div>
		);
	}
}

export default Main;
