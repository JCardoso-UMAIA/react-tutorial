class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentTime: new Date().toLocaleString() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            console.log('Updating...');
            this.setState({ currentTime: new Date().toLocaleString() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return React.createElement('div', null, this.state.currentTime);
    }
}