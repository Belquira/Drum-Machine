import React, { Component } from "react";
import "../css/DrumPad.css";

/* const activeStyle = {
  backgroundColor: 'white',
  boxShadow: "0 3px white",
  height: 77,
  marginTop: 13 };

const inactiveStyle = {
  backgroundColor: 'grey',
  marginTop: 10,
  boxShadow: "3px 3px 5px black" }; */

class DrumPad extends Component {

  state = {
    style: ""
  }

  componentDidMount() {
    document.addEventListener("keypress", this.keyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keypress", this.keyPress);
  }

  keyPress = event => {
      const params = /[qweasdzxc]/gi; //teclas permitidas.
      const key = event.key.toUpperCase();
      if (params.test(event.key)) {
        if (this.props.keyTrigger === key) {
          this.playSound();
        }   
      };
  };

  playSound = () => {
    const { soundName, power } = this.props;
    if (power){
    const audio = document.getElementById(this.props.keyTrigger);
    audio.volume = this.props.volume;
    audio.currentTime = 0.0;
    audio.play();
    this.props.displaySound(soundName);
    }
};

  render() {
    const { soundName, sound, keyTrigger, index} = this.props;
    return (
      <div className={"drum-pad-"+index} id={soundName}
       onClick={this.playSound} >
          <label>{keyTrigger}</label>
          <audio
            className={"clip-"+index}
            id={keyTrigger}
            src={sound}
          />
      </div>
    );
  }
}
export default DrumPad;
