import React, {useState} from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import youtube from './api/youtube';
import { SearchBar, VideoList, VideoDetail } from './components';

const App = () => {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  async function handleSubmit(searchTerm){
    const {data : {items: videos}} = await youtube.get('search', {
      params: {
        part: 'snippet', 
        maxResults: 10,
        key: 'AIzaSyDiMJfOA8ZJIkgwpS69xteFokUEhut-GI8',
        q: searchTerm, 
    }
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }

  // componentDidMount(){
  //   this.handleSubmit('pdf generation with react and node')
  // }
  
  // const onVideoSelect = (video) => {
  //   this.setState({selectedVideo: video})
  // }

    return (
      <Grid 
      style = {{justifyContent: "center", backgroundColor: "#202020"}}
      container spacing = {5}
      >
        <Grid item xs = {12}>
          <Grid container spacing = {10}>
            <Grid item xs = {12}>
              <SearchBar onSubmit = {handleSubmit}/>
            </Grid>
            <Grid item xs = {8}>
              <VideoDetail video = {selectedVideo}/>
            </Grid>
            <Grid item xs = {4}>
              <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }

export default App;
///// AIzaSyDiMJfOA8ZJIkgwpS69xteFokUEhut-GI8    ///// API KEY