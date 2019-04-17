import React  from "react";

const Panel = (props) => {
    return (
        <div>
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
        </div>
    );
}
export default Panel;