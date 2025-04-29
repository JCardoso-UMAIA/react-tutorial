class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: new Date() };
    this.launchClock();
  }

  launchClock() {
    console.log(this);
    setInterval(() => {
      console.log('updating...');
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  render() {
    console.log('Rendering...');
    return React.createElement(
      'div',
      null,
      React.createElement(AnalogDisplay, { time: this.state.currentTime.getTime() }),
      React.createElement(DigitalDisplay, { time: this.state.currentTime.toLocaleString() })
    );
  }
}