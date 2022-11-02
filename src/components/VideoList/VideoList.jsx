import React from 'react';
import styles from './VideoList.module.css';
import VideoItem from '../video_item/VideoItem';

    const VideoList = (props) => {
        return (
            <ul className={styles.videos}>
                {props.videos.map(video => <VideoItem key={video.id} video={video}></VideoItem>)}
            </ul>
        )
    };

    export default VideoList;

