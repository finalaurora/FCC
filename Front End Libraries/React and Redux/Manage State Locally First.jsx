class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    // add handleChange() and submitMessage() methods here
    handleChange(e) {
        this.setState({
            input: e.target.value
        });
    }
    submitMessage(event) {
        this.setState({
            messages: [...this.state.messages, this.state.input],
            input: ''
        });
        event.preventDefault();
    }
    render() {
        let messages = this.state.messages.map((item) => <li style={{ color: "red" }}>{item}</li>);
        return (
            <div>
                <h2>Type in a new Message:</h2>
                { /* render an input, button, and ul here */}
                <input value={this.state.input} onChange={this.handleChange}></input>
                <button type="submit" onClick={this.submitMessage}>Submit</button>
                <ul>{messages}</ul>
                { /* change code above this line */}
            </div>
        );
    }
};