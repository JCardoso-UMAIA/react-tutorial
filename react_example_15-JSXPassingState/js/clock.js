class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = { currentTime: new Date() };
  }
  launchClock() {
    setInterval(
      function () {
        this.setState({ currentTime: new Date() });
      }.bind(this),
      1000,
    );
  }
  render() {
    return React.createElement('div', null,
      React.createElement(AnalogDisplay, { time: this.state.currentTime.getTime() }),
      React.createElement(DigitalDisplay, { time: this.state.currentTime.toLocaleString() })
    );
  }
}

ReactDOM.render(
  React.createElement(Clock, null),
  document.getElementById('root')
);
