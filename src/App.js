import React, { Component } from "react";
import NavBar from "./components/navBar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    this.setState({ counters: newCounters });
  };

  handleReset = () => {
    const newCounters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: newCounters });
  };

  handleDelete = counterId => {
    const newCounters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters
            counter={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
