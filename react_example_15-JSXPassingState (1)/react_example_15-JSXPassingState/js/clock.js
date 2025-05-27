class Clock extends React.Component {
  constructor(props) {
  super(props);
  this.launchClock();
  this.state = {currentTime: new Date()};
  }
  launchClock() {
  console.log(this);
  setInterval(
  function () {
  console.log('updating...');
  this.setState({currentTime: new Date()});
  }.bind(this),
  1000,
  );
  }
  render() {
  console.log('Rendering...');
   return (
      <div>
        <AnalogDisplay time={this.state.currentTime.getTime()} />
        <DigitalDisplay time={this.state.currentTime.toLocaleString()} />
      </div>
    );
  }
}