import React, { Component } from "react";
import DrumPad from "./DrumPad";
import Panel from "./Panel";
import { keySounds } from "../sounds/sounds";

class DisplayContainer extends Component {
  state = {
    keyPressed: "",
    volumen: 0.5,
    power: true
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
  
  render() {
    const { volumen, power } = this.state;
    return (
      <div id="display">
        {keySounds.map(({ keyTrigger, id, url }) => (
          <DrumPad
            key={keyTrigger}
            keyTrigger={keyTrigger}
            sound={url}
            id={id}
            volume={volumen} 
            power={power}
            />
        ))}
        <Panel 
          volumen={volumen}
          power={power}
          volumenChange={this.volumenChange} 
          powerChange={this.powerChange} />
        
      </div>
    );
  }
}
export default DisplayContainer;
