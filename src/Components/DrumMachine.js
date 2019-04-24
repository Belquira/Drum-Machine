import React, { Component } from "react";
import DrumPad from "./DrumPad";
import Panel from "./Panel";
import { switchOne, switchTwo } from "../sounds/sounds";
import "../css/Container.css";

class DrumMachine extends Component {
	state = {
		volumen: 0.5,
		power: true,
		display: "Heater-Kit",
		currentSwitch: switchOne,
		selectedSwitch: "one"
	};

	volumenChange = event => {
		const { power } = this.state;
		if (power) {
			this.setState({
				volumen: parseFloat(event.target.value),
				display: "Volume: " + event.target.value * 100
			});
		}
	};

	powerChange = event => {
		const displayPower = this.state.power ? "Power OFF" : "Power ON";
		this.setState({
			power: event.target.checked,
			display: displayPower
		});
	};

	displaySound = id => {
		this.setState({
			display: id
		});
	};

	switchSound = () => {
		const { selectedSwitch } = this.state;
		if (selectedSwitch === "one") {
			this.setState({
				currentSwitch: switchTwo,
				selectedSwitch: "two",
				display: "Piano Kit"
			});
		} else
			this.setState({
				currentSwitch: switchOne,
				selectedSwitch: "one",
				display: "Heater Kit"
			});
	};

	render() {
		const { volumen, power, currentSwitch } = this.state;

		return (
			<div className="container">
				<div id="drum-machine">
					<div id="pads-panel">
						{currentSwitch.map(({ keyTrigger, id, url }, indx) => (
							<DrumPad
								key={id}
								keyTrigger={keyTrigger}
								sound={url}
								volume={volumen}
								power={power}
								soundName={id}
								displaySound={this.displaySound}
								index={indx + 1}
							/>
						))}
					</div>
					<Panel
						volumen={volumen}
						power={power}
						volumenChange={this.volumenChange}
						powerChange={this.powerChange}
						display={this.state.display}
						switch={this.switchSound}
					/>
				</div>
			</div>
		);
	}
}
export default DrumMachine;
