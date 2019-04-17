import React, { Component } from "react";

class DrumPad extends Component {

  componentDidMount() {
    document.addEventListener("keypress", this.keyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keypress', this.keyPress);
  }

  keyPress = event => {
    const {power} = this.props;
    const key = event.key.toUpperCase();
    const params = /[qweasdzxc]/gi; //teclas permitidas.
    if(power === true){
    if (params.test(event.key)) {
        if (this.props.keyTrigger === key){
          this.playSound();
        }
      }
  };
};

   playSound = () => {
    const audio = document.getElementById(this.props.keyTrigger);
    audio.volume = this.props.volume;
    audio.currentTime = 0.0;
    audio.play();
  }


render(){
  return (
    <div >
      <button onClick={this.playSound}>{this.props.keyTrigger}</button>
      <audio id={this.props.keyTrigger} src={this.props.sound} />
    </div>
  );
};

}
export default DrumPad;
