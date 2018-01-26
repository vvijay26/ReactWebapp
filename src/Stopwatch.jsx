import React, {Component} frm 'react'
import './App.jsx'

/*props can be used to access parent elements */	
class Stopwatch extends Component {
	constructor(props) {
		super(props);
		this.state={
			days: 0,
			hours: 0,
			mins: 0,
			secs: 0
		}
	}

export default Stopwatch;	