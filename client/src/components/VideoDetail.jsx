import React from 'react';
import './video.css'
import { Paper, Typography } from '@material-ui/core'

const VideoDetail = ({video}) => {
    if(!video) return <div style = {{height: "900px"}}><div className = "loader"></div></div>
    console.log(video)

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
        
        return date.toString();
        }  
    }         
        
        let trueDate = dateHelper(video.snippet.publishedAt.split("-"))

console.log(video.id.videoId)

const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <React.Fragment style={{height: '1500px'}}>
            <Paper elevation={6} style={{height: '35%', marginLeft: "5rem"}}>
                <iframe frameBorder='0' height="100%" width="100%" title="Video Player" src={videoSrc}/>
            </Paper>
            <div style={{padding: '15px', marginLeft: "5rem", backgroundColor: "#202020"}}>
                <Typography variant="h4" style={{color: "white"}}>{video.snippet.title}</Typography>
                <Typography variant="subtitle2" style = {{color: "#808080"}}>{trueDate}</Typography>
                <hr/>
                <Typography variant="subtitle1" style = {{color: "white"}}>{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2" style = {{color: "white"}}>{video.snippet.description}</Typography>
            </div>
        </React.Fragment>
    )
}


export default VideoDetail;