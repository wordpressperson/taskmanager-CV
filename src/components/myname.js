import React from "react";
import "../index.css";

const MyName = (props) => (
<p className="MyName">
	{props.message}
</p>
);

export default MyName;