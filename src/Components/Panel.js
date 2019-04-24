import React from "react";
import "../css/Panel.css";
const Panel = props => {
	return (
		<div id="display">
			<p className="display-panel">{props.display}</p>
			<div className="volume-panel">
				<input
					type="range"
					min={0}
					max={1}
					step={0.1}
					value={props.volumen}
					onChange={props.volumenChange}
					className="volume-input"
				/>
				<p>Volume</p>
			</div>
			<div className="switch-panel">
				<p>Switch</p>
				<label className="switch">
					<input type="checkbox" onChange={props.switch} />
					<span className="slider" />
				</label>
			</div>
			<div className="power-panel">
				<p>Power</p>
				<label className="switch">
					<input
						type="checkbox"
						checked={props.power}
						onChange={props.powerChange}
					/>
					<span className="slider" />
				</label>
			</div>
			<div className="gh-item">
				by{" "}
				<a href="https://github.com/Belquira">
					belquira <i className="fab fa-github-alt" />
				</a>
			</div>
		</div>
	);
};
export default Panel;
