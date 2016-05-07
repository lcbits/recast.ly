class Search extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      query: 'HR'
    };
  }
  // var query = 'HR';
  handleChange (event) {
    // console.log('inside handlechange', event);
    this.setState({'query': event.target.value});
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.handleChange.bind(this)}/>
        <button className="btn hidden-sm-down" onClick={this.props.clicker.bind(null, this.state.query)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

