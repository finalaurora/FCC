class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // change code below this line
        console.log("Begin mount " + MyComponent.name);
        // change code above this line
    }
    render() {
        return <div />
    }
};