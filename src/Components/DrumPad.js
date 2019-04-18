import React, { Component } from "react";

class DrumPad extends Component {
  state ={
    display : ""
  }
  componentDidMount() {
    document.addEventListener("keypress", this.keyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keypress", this.keyPress);
  }

  keyPress = event => {
    const { power } = this.props;
    const key = event.key.toUpperCase();
    const params = /[qweasdzxc]/gi; //teclas permitidas.
    if (power === true) {
      if (params.test(event.key)) {
        if (this.props.keyTrigger === key) {
          this.playSound();
          this.setState({
            display: this.props.soundName
          });
        };
      };
    };
  };

  playSound = () => {
    const audio = document.getElementById(this.props.keyTrigger);
    audio.volume = this.props.volume;
    audio.currentTime = 0.0;
    audio.play();
    this.props.displaySound(this.state.display)
  };

  render() {
    return (
      <div className={"drum-pad"} id={this.props.soundName}
       onClick={this.playSound}>
          {this.props.keyTrigger}
          <audio
            className={"clip"}
            id={this.props.keyTrigger}
            src={this.props.sound}
          />
        
      </div>
    );
  }
}
export default DrumPad;
