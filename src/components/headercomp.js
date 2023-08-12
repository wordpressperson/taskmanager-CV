import React from "react";

const xvariable=5;

const styles= {
		fontStyle: 'italic', 
		backgroundColor: '#108003'
	}

	if (xvariable==4)
	{
		styles.color= "red";
	}

const HeaderComp = (props) => (
	<p style={styles}>
		This is the header component 
	</p>
);

export default HeaderComp;