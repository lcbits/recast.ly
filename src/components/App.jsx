class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      allVideos: window.exampleVideoData
    };

    //console.log('this state', this.state.currentVideo);

    this.updateCurrentVideo = this.updateCurrentVideo.bind(this);
    this.updateAllVideos = this.updateAllVideos.bind(this);
    // console.log(this.state);
  }

  componentDidMount() {
    console.log('MOUNTED!');
    this.searchVid('up');
    //var res;
    //searchYouTube(vidData => res = vidData);
    //console.log(res);
    console.log(this.state);
  }

  searchVid(query) {
    console.log(query);
    var results = searchYouTube(query, this.updateAllVideos);
    this.updateAllVideos(results);
  }

  updateCurrentVideo(newVid) {
    this.setState( {currentVideo: newVid} );
  }

  updateAllVideos(newVidList) {
    this.setState( {allVideos: newVidList} );
    this.setState( {currentVideo: newVidList[0]});
  }  

  render() {
    // console.log('in render', this.state);
    return (
      <div>
        <Nav clicker={this.searchVid.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.allVideos} clicker={this.updateCurrentVideo} />
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
