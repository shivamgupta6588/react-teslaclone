import React from 'react'
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
function Footer() {
    return (
        <CustomFooter>
                 <Fade bottom>
                                <a href="#">Tesla © 2021</a>
                                <a href="#">Privacy & Legal </a>
                                <a href="#">Contact</a>
                                <a href="#">News</a>
                  </Fade>
        </CustomFooter>
    )
}

export default Footer


const CustomFooter=styled.div`



background-color: transparent;
bottom: 0;
padding: 0;
padding:10px 0;
position: relative;
width: 100%;
z-index: 100;
min-height:70px;

display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
   
    a
    {
        font-weight:400;
        color:rgb(57, 60, 65);
        text-transform: uppercase;
        padding:0 10px;
        flex-wrap:no-wrap;
font-size:12px;    
padding: 0 10px;
font-family:"Gotham Book", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;    
    }`