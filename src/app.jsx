import React, { useEffect, useState } from 'react';
import VideoList from './components/VideoList/VideoList';

export default function App() {
  
  const [videos, setVideos] = useState([]);
  
  useEffect(()=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBYcsMrBdsHq8vLS7_1ql2MIQ5M-gPYo_g", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return <VideoList videos={videos}/>
}

