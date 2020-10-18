import ReactDOM from 'react-dom';
import React, { useState } from "react";
import MainLayout from '../layout/MainLayout';
import { Select, Spin } from 'antd';
import {  TwitterTweetEmbed } from 'react-twitter-embed';
import { Input } from 'antd';
import debounce from 'lodash/debounce';


const { Search } = Input;



export default function Overview() {
  return <>
    <MainLayout>
    <center>
    <h3
            style={{
              color: "#000000",
              fontSize: 35,
              fontFamily: 'nunito',
              margin: 0,
              fontWeight: "bold",
            }}>

            #Healthyconversations
          
          </h3>
    <br />
    <br />
    <Search
      placeholder="search topic"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
    <br />
    <br />
    
    <div className="centerContent">
    <div className="selfCenter">
    
    <TwitterTweetEmbed tweetId="1317635176760020992" />

    </div>
    </div>
    </center>
    


    </MainLayout >
  </>;
}

