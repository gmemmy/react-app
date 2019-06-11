import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
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
  }

  handleReset  = () => {
    const newCounters = this.state.counters.map(c => {
      c.value = 0;
      return c;
  })
  this.setState({ counters: newCounters });
  }

  handleDelete = counterId => {
    const newCounters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary btn-sm">
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
