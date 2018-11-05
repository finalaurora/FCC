class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper />
        </div>
      );
    }
  };
  // change code below this line
  const Camper = (props)=>{
    Camper.propTypes ={
      name: PropTypes.string.isRequired
    }
    return (
      <p>{props.name}</p>
    );
  };
  Camper.defaultProps={
    name: 'CamperBot'
  }