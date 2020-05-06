import React from "react";
import "./App.css";
import doCalculate from "./calculators/costCalculator";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.doCalculate = doCalculate;
    this.input = React.createRef();
    this.geeseInput = React.createRef();
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
            <label>
              Total Bags of Corn
              <input type="number" ref={this.input} />
            </label>
            <label>Total Number of Geese
            <input type="number" ref={this.geeseInput} />
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
    console.log('geese: ' + this.geeseInput.current.value + ' corn: ' + this.input.current.value)
    alert("The total cost: £" + doCalculate(this.geeseInput.current.value, this.input.current.value));
  }
}

export default App;
