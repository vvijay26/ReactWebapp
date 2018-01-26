import React, {Component} from 'react'
import './App.jsx'

/*props can be used to access parent elements */	
class Stopwatch extends Component {
	constructor(props) {
		super(props);
		this.state={
			counter: 0
		}
	}

	render(){
		return(
			<div>
			  	<div className="Stopwatch">{this.state.counter} is the value of counter</div>
			</div>
			)
	}
}

export default Stopwatch;	