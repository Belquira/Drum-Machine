import React  from "react";
import "../css/Panel.css";
const Panel = (props) => {
    return (
        <div id="display">
        {props.display}
        <p>Volume:</p>
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={props.volumen}
          onChange={props.volumenChange}
        />
        <p>Power</p>
        <input type="checkbox" checked={props.power} onChange={props.powerChange}/>
        <p>Switch</p>
        <input type="checkbox" onChange={props.switch} ></input>
        </div>
    );
}
export default Panel;