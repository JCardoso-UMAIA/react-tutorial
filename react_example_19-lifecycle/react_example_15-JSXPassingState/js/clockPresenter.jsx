class ClockPresenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showClock: true };
    }

    onClick = () => {
        let value = !this.state.showClock;
        this.setState({ showClock: value });
    };

    render() {
        return (
            <div>
                <button onClick={this.onClick}>
                    {this.state.showClock ? "Hide" : "Show"}
                </button>
                {this.state.showClock && <Clock />}
            </div>
        );
    }
}