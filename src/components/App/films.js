import React from "react";
import "./App.css";

const Films = (props) => (
	<div className="Films">
		<input 
		type="checkbox" 
		checked={props.completed}
		onChange={() => props.handleChange(props.id)}
		/>

		<p style={{textDecoration: props.completed ? 'line-through' :null}}>
		   {props.text}
		</p>
	</div>
);

export default Films;


