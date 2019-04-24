import React, { Component } from "react";
import "../css/DrumPad.css";


class DrumPad extends Component {
	state = {
		style: { backgroundColor: "" }
	};

	activeStyle = drumpadKey => {
		let drumpadActive = "";

		switch (drumpadKey) {
			default:
				drumpadActive = "";
				break;

			case "Q":
			case "W":
			case "E":
				drumpadActive = "red";
				break;

			case "A":
			case "S":
			case "D":
				drumpadActive = "blue";
				break;

			case "Z":
			case "X":
			case "C":
				drumpadActive = "yellow";
				break;
		}

		const stylePad = { backgroundColor: drumpadActive };
		this.state.style.backgroundColor === drumpadActive
			? this.setState({ style: { backgroundColor: "" } })
			: this.setState({ style: stylePad });
	};

	componentDidMount() {
		document.addEventListener("keypress", this.keyPress);
	}
	componentWillUnmount() {
		document.removeEventListener("keypress", this.keyPress);
	}

	keyPress = event => {
		const { keyTrigger } = this.props;
		const params = /[qweasdzxc]/gi; //teclas permitidas.
		const key = event.key.toUpperCase();
		if (params.test(event.key)) {
			if (keyTrigger === key) {
				this.playSound();
			}
		}
	};

	playSound = () => {
		const { soundName, power, keyTrigger } = this.props;
		if (power) {
			const audio = document.getElementById(keyTrigger);
			audio.volume = this.props.volume;
			audio.currentTime = 0.0;
			audio.play();
			this.props.displaySound(soundName);
			this.activeStyle(keyTrigger);
			setTimeout(() => this.activeStyle(keyTrigger), 250);
		}
	};

	render() {
		const { soundName, sound, keyTrigger, index } = this.props;
		const { style } = this.state;
		return (
			<div
				className={"drum-pad-" + index}
				id={soundName}
				onClick={this.playSound}
				style={style}>
				<label>{keyTrigger}</label>
				<audio
					className={"clip-" + index}
					id={keyTrigger}
					src={sound}
				/>
			</div>
		);
	}
}
export default DrumPad;
