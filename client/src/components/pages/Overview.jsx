
import React, { useState } from "react";
import { Timeline } from 'react-twitter-widgets'
import MainLayout from '../layout/MainLayout';
import {  TwitterTweetEmbed } from 'react-twitter-embed';
import { Input } from 'antd';


const { Search } = Input;

const assignments = [
  { dueDate: "in 30 mins", title: "Lab 2", course: "ECE2202", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, repellendus unde! " },
  { dueDate: "in 1 day", title: "Homeword 3", course: "MATH3202", desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, repellendus unde! " },
  { dueDate: "in 3 days", title: "Quiz 1", course: "MATH3444", desc: "Rerum, repellendus unde! Soluta, alias architecto tempore laboriosam debitis rerum dolorum iusto eos dolor assumenda, autem quasi nobis natus. Quia, asperiores magnam!" },
]

export default function Overview() {
  const [items, setItems] = useState(assignments);


  const markAsDone = (e, item) => {
    setTimeout(() => {
      const newItems = items.filter((i) => i != (e.target.checked ? item : null));
      setItems(newItems);
    }, 800)
  }

  const calculateProgress = () => {
    return Math.round(((assignments.length - items.length) / assignments.length) * 100);
  }

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
    
    <TwitterTweetEmbed tweetId="933354946111705097" />
    </div>
    </div>
    </center>
    


    </MainLayout >
  </>;
}
