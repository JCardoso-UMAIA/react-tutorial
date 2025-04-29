console.log("Rendering the Clock component...");

const DigitalDisplay = props => React.createElement(
  "div",
  null,
  props.time
);

const AnalogDisplay = (props) => {
  let date = new Date(props.time);
  let dialStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 20000,
    borderStyle: 'solid',
    borderColor: 'black',
  };
  let secondHandStyle = {
    position: 'absolute',
    top: 100,
    left: 100,
    border: '1px solid red',
    width: '40%',
    height: 1,
    transform: 'rotate(' + ((date.getSeconds() / 60) * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'red',
  };
  let minuteHandStyle = {
    position: 'absolute',
    top: 100,
    left: 100,
    border: '1px solid grey',
    width: '40%',
    height: 3,
    transform: 'rotate(' + ((date.getMinutes() / 60) * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'grey',
  };
  let hourHandStyle = {
    position: 'absolute',
    top: 92,
    left: 106,
    border: '1px solid grey',
    width: '20%',
    height: 7,
    transform: 'rotate(' + ((date.getHours() / 12) * 360 - 90).toString() + 'deg)',
    transformOrigin: '0% 0%',
    backgroundColor: 'grey',
  };
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { style: dialStyle },
      React.createElement('div', { style: secondHandStyle }),
      React.createElement('div', { style: minuteHandStyle }),
      React.createElement('div', { style: hourHandStyle })
    )
  );
};

// Create a root and render the Clock component
const root = ReactDOM.createRoot(document.getElementById('content'));
root.render(React.createElement(Clock, null));