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

	getStopUntil(stopdeadline){
		const counter = stopdeadline + Date.parse(new Date());
		this.setState({counter});
		console.log("counter value ", counter);
	}

	componentWillMount(){
		const first_time = Date.parse(new Date());
		const counter = this.props.stopdeadline + first_time;
		this.setState({counter});
	}

    /*Once the component is mounted, componentDidMount can be used to auto refresh*/
    /* 1000  millisecs - so it refreshes every 1 sec in this example automatically! */
	componentDidMount(){
		setInterval(() => this.getStopUntil(this.props.stopdeadline),1000)
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