import React from 'react';
import './App.css';

class App extends React.Component{

constructor(props) {
  super(props);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.input = React.createRef();
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>kornhub</code>
        </p> 

        <form onSubmit={this.handleSubmit}>
        <div>
          <label>Cost per ferry trip: £0.25</label>
          </div>
          <div>
          <label>Cost per round trip: £0.50</label>
          </div>
          <label>Total Bags of Corn
            <input type="text" ref={this.input}/>
          </label>
          <div>
          <input type="submit" value="Calculate" />
          </div>
        </form>
      
      </header>
      
    </div>
  );
}
 handleSubmit(event) {
  alert('The total cost: £' + this.doCalculate(this.input.current.value));
}

doCalculate(valueAsString){
  return parseInt(valueAsString) * .5;
}

}





export default App;
