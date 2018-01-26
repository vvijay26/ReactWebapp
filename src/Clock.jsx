import React, {Component} from 'react';
import './App.css';

/*props can be used to access parent elements */	
class Clock extends Component {
	constructor(props) {
		super(props);
		this.state={
			days: 0,
			hours: 0,
			mins: 0,
			secs: 0
		}
	}

	getTimeUntil(deadline){
		const time = Date.parse(deadline) - Date.parse(new Date());
		console.log("Times ", time);
		const secs = Math.floor((time/1000)%60);
		const mins = Math.floor((time/1000/60)%60);
		const hours = Math.floor((time/(1000*60*60))%24);
		const days = Math.floor((time/(1000*60*60*24)));
		this.setState({days});
		this.setState({hours});
		this.setState({mins});
		this.setState({secs});
	}
	/*when both key and value pair have same name, use just one..for example:
	/* instead of days:days, we can use just days in -> this.setState({"days": days})./*	
	/* Once props data is available, componentWillMount will update the state automatically */

	componentWillMount(){
		this.getTimeUntil(this.props.deadline);
	}

    /*Once the component is mounted, componentDidMount can be used to auto refresh*/
    /* 1000  millisecs - so it refreshes every 1 sec in this example automatically! */
	componentDidMount(){
		setInterval(() => this.getTimeUntil(this.props.deadline),1000)
	}

	/* This function ensures the countdown values are always 2 digits (Eg: 09 instead of 9)
	*/
	leading0num(num){
		return num <10 ? '0' + num : num ;
		/* the one liner (called Ternary expression) expands to :-
		if(num <10) {
			return '0' + num;
		}
		else {
			return num;
		}
		*/
	}

	render(){
		return(
			<div>
			  	<div className="Clock-days">{this.leading0num(this.state.days)} days</div>
			  	<div className="Clock-hours">{this.leading0num(this.state.hours)} hours</div>
			  	<div className="Clock-mins">{this.leading0num(this.state.mins)} mins</div>
			  	<div className="Clock-secs">{this.leading0num(this.state.secs)} secs</div>
			</div>
			)
	}
}

export default Clock;