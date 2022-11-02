import React from 'react';
import styles from './VideoItem.module.css';

//const VideoItem = props => (~~ img src={props.video.~~}) 대신 밑에처럼 사용가능
 const VideoItem = ({video: { snippet }}) => (
    <li className={styles.video}>
        <img 
          className={styles.thunbnail}
          src={snippet.thumbnails.medium.url} 
          alt="video thumbnail" 
        />
        <div>
            <h1 className={styles.title}>{snippet.title}</h1>
            <p className={styles.channel}>{snippet.channelTitle}</p>
            <p className={styles.publishedAt}>{snippet.publishedAt}</p>
        </div>
    </li>
 )

export default VideoItem;

