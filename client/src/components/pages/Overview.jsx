import React, { useState, Component } from "react";
import { Timeline } from "react-twitter-widgets";
import MainLayout from "../layout/MainLayout";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Input } from "antd";
import Item from "antd/lib/list/Item";

const { Search } = Input;

const seach_query_text = [
  {
    dueDate: "in 30 mins",
    title: "Lab 2",
    course: "ECE2202",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, repellendus unde! ",
  },
  {
    dueDate: "in 1 day",
    title: "Homeword 3",
    course: "MATH3202",
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, repellendus unde! ",
  },
  {
    dueDate: "in 3 days",
    title: "Quiz 1",
    course: "MATH3444",
    desc:
      "Rerum, repellendus unde! Soluta, alias architecto tempore laboriosam debitis rerum dolorum iusto eos dolor assumenda, autem quasi nobis natus. Quia, asperiores magnam!",
  },
];

class RequestAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      test: "test",
    };
  }

  componentDidMount() {
    fetch("/filtered_out_sentimental_search/covid")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      console.log(this.props.searchQuery);
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {items.map((item) => (
            <TwitterTweetEmbed tweetId={item.id.toString()} />
          ))}
        </div>
      );
    }
  }
}

export default function Overview() {
  const [items, setItems] = useState("");
  var item;
  return (
    <>
      <MainLayout>
        <center>
          <h3
            style={{
              color: "#000000",
              fontSize: 35,
              fontFamily: "nunito",
              margin: 0,
              fontWeight: "bold",
            }}
          >
            #Healthyconversations
          </h3>
          <br />
          <br />
          <Search
            placeholder="search topic"
            enterButton="Search"
            size="large"
            onSearch={(value) => setItems(value)}
          />
          <br />
          <br />

          <div className="centerContent">
            <div className="selfCenter">
              <RequestAPI searchQuery={items} />
            </div>
          </div>
        </center>
      </MainLayout>
    </>
  );
}
