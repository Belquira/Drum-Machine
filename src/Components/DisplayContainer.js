import React, { Component } from "react";
import DrumPad from "./DrumPad";
import Panel from "./Panel";
import { keySounds } from "../sounds/sounds";
import "../css/DisplayContainer.css";

class DisplayContainer extends Component {
  state = {
    volumen: 0.5,
    power: true,
    display: ""
  };

  volumenChange = event => {
    this.setState({
      volumen: parseFloat(event.target.value),
    });
  };

  powerChange = event => {
    this.setState({
      power: event.target.checked,
      keyPressed: ""
    });
  };

  displaySound = (id) =>{
    this.setState({
      display: id
    })
  }  
  render() {
    const { volumen, power } = this.state;
    return (
      <div id="drum-machine">
        {keySounds.map(({ keyTrigger, id, url }) => (
          <DrumPad
            key={id}
            keyTrigger={keyTrigger}
            sound={url}
            volume={volumen} 
            power={power}
            soundName={id}
            displaySound={this.displaySound}
            />
        ))}
        <Panel 
          volumen={volumen}
          power={power}
          volumenChange={this.volumenChange} 
          powerChange={this.powerChange} 
          display={this.state.display}
          />
      </div>
    );
  }
}
export default DisplayContainer;
