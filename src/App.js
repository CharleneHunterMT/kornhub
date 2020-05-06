import React from "react";
import "./App.css";
import doCalculate from "./calculator";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.doCalculate = doCalculate;
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
            <label>
              Total Bags of Corn
              <input type="text" ref={this.input} />
            </label>
            <label>Total Number of Geese</label>
            <div>
              <input type="submit" value="Calculate" />
            </div>
          </form>
        </header>
      </div>
    );
  }
  handleSubmit(event) {
    alert("The total cost: £" + doCalculate(this.input.current.value));
  }
}

export default App;
