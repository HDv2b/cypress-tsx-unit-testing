import React from 'react';

class TsGreeting extends React.Component {
  private state: { greeting: string };
  setState: Function;

  constructor(...args) {
    super(...args);

    this.state = {
      greeting: 'Hello',
    };
  }

  updateGreeting() {
    this.setState({
      greeting: 'Bonjour',
    });
  }

  render() {
    return (
      <div aria-label="greeting">
        <p>
          {this.state.greeting}
          {' '}
          World
        </p>
        <button onClick={this.updateGreeting.bind(this)}>
          Update greeting
        </button>
      </div>
    );
  }
}

export default TsGreeting;
