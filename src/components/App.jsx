class App extends React.Component {
  
  constructor(props) {
    super(props);

    //var results;


    // var searchResults = props.searchYouTube(null, vidData => {

    //   var waiting = (function() {
    //     if (!this.state) {
    //       console.log('waiting for app to mount...');
    //       setTimeout(waiting, 100);
    //     } else {
    //       this.updateCurrentVideo(vidData[0]);
    //       this.updateAllVideos(vidData);   
    //       console.log('ready!');
    //       console.log(this.state);  

    //     }
    //   }).bind(this);

    //   waiting();

    // });
    // props.searchYouTube(vidData => 'hello'); 


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
    // this.updateCurrentVideo();
    // this.updateAllVideos();
    var res;
    searchYouTube(vidData => res = vidData);
    console.log(res);
  }

  searchVid(query) {
    console.log(query);
    var results = searchYouTube(query, this.updateAllVideos);
    //console.log('searchVid', results);
    //this.updateAllVideos(results);
  }

  updateCurrentVideo(newVid) {
    this.setState( {currentVideo: newVid} );
  }

  updateAllVideos(newVidList) {
    this.setState( {allVideos: newVidList} );
  }  

  render() {
    // console.log('in render', this.state);
    return (
      <div>
        <Nav clicker={this.searchVid.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
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
