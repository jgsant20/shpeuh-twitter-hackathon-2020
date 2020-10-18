import { Card, Checkbox, Divider, Empty, Progress, Statistic, Tag, Typography } from "antd";
import React, { useState } from "react";
import { RightOutlined } from '@ant-design/icons';
import MainLayout from '../layout/MainLayout';
import Theme from "../../theme";

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
    <font size="+3"><b> #HealthyConversations </b> </font>
    </center>
      
    </MainLayout >
  </>;
}
