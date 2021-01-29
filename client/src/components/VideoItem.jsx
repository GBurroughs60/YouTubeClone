import React from 'react';

import {Grid, Paper, Typography} from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {

    function dateHelper(videoDate){
        let publishedAt = videoDate;
        // let published = publishedAt.split("-")
        let published = publishedAt[2].split("T")
        let date = []
            date.push(publishedAt[1])
            date.push(" " + published[0])
            date.push(" " + publishedAt[0])
        
        const months = {
            "01" : "Jan",
            "02" : "Feb",
            "03" : "Mar",
            "04" : "Apr",
            "05" : "May",
            "06" : "Jun",
            "07" : "Jul",
            "08" : "Aug",
            "09" : "Sep",
            "10" : "Oct",
            "11" : "Nov",
            "12" : "Dec",
        };
        for( let key in months){
            if(months.hasOwnProperty(date[0])){
                console.log(key)
                date[0] = months[key];
            }
        }
        return date.toString();
        }   
        let trueDate = dateHelper(video.snippet.publishedAt.split("-"))

    console.log(video)
    return (
        <Grid item xs={12}>
            <Paper style={{display: 'flex', alignItems: 'center', cursor:'pointer', height: "100%", backgroundColor: "#202020", color: "white"}} onClick={() => onVideoSelect(video)}>
                <img style={{ marginRight: "20px", height: "150px"}} alt ="thumbnail" src={video.snippet.thumbnails.medium.url}/>
                <div>
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
                <Typography variant="subtitle1" style = {{color: "#808080"}}>{video.snippet.channelTitle}</Typography>
                <div>
                    <Typography variant="subtitle2">{trueDate}</Typography>
                </div>
                </div>
            </Paper>
        </Grid>
    )
}

export default VideoItem;