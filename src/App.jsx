import React, {Component} from 'react';
import Clock from './Clock.jsx';
import Stopwatch from './Stopwatch.jsx';
import './App.css';
import { Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
	constructor(props) {
		super(props);
		this.state={
			deadline: 'December 25,2018',
			newDeadline: ''
		}
	}

	/* Never Mutate or change state directly, for example this.state = <something els>
	Instead use this.setState */
	changeDeadline(){
		this.setState({deadline:this.state.newDeadline});

	}

    /*Anonymous function call allows preventing infinite loop (by allowing call only once)
    Like onClick={() => this.changeDeadline()} 
    event.target.value captures the value , for example - 
    event => console.log('event',event.target.value)

    Inside the clock tag, we can pass the parents(App.jsx) state thru props to child(Clock)*/

	render() {
		return(
		<div className="App"> 
		  <div className="App-title">
		    t to {this.state.deadline}
		  </div>
		  <div>
		  <Clock 
		    deadline={this.state.deadline}
		  />  
		  </div>
		  <div>
		  <Stopwatch 
		    deadline={this.state.deadline}
		  />  
		  </div>
		  <Form inline={true}>
		  <FormControl 
		   className = 'Deadline-control'
		   placeholder='new date'
		   onChange={events => this.setState({newDeadline:events.target.value})}/>		   
		  <Button onClick={() => this.changeDeadline()}> 
		    Submit
		  </Button>
		  </Form>
		</div>
		)
	}
}

export default App;
