import React, { useState } from 'react';
import { Paper, TextField} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../BewbTubeLogo.png'
import './video.css'

const SearchBar = ({onSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }
    

    const onKeyPress = (e) => {
        if(e.key === "Enter"){
            onSubmit(searchTerm);
        }
    }

    const handleSubmit = () => {
        onSubmit(searchTerm);
    }

    return (
        <div style={{display:"flex", backgroundColor:"#2f3136", height: "100px", width: "1870px"}}>
        <img src={logo} style = {{height: "150px", verticalAlign: "center"}} />
        <div style = {{padding: '15px', width: "650px", marginLeft: "350px", marginTop: "auto", marginBottom: "auto"}}> 
                <TextField 
                label = 'Search' 
                value = {searchTerm}
                onChange = {handleChange}
                onKeyPress = {onKeyPress}
                className = "label"
                inputProps={{
                    style: {
                        padding: 1,
                        marginBottom: 2,
                        color: 'white'
                    }
                }}
                
                />
                <div style = {{display: "inline", height: "100px"}}>
                <button onClick = {handleSubmit} style = {{height: "38px", backgroundColor: "#373737", border: "1px solid #373737", width: "65px", cursor:'pointer' }}><SearchIcon fontSize = "medium" style = {{marginTop:"1px", color: "white", verticalAlign: "center"}}/></button>
                </div>
        </div>
        </div>
    )
}

export default SearchBar;