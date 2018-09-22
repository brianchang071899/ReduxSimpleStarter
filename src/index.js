import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = "AIzaSyCiMLJwf_KUsBGda5PW605_PwYtDDUJISk"


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos: []
    };

    YTSearch({key: API_KEY, term: 'Im a cyborg but thats ok'}, (videos) => {
      this.setState({ videos });
      // ^== this.setState({ videos: videos }) in ES6
    });
  }
  render(){
    return(
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))