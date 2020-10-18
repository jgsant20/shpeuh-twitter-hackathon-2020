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
    <MainLayout title="Overview">
      <Card style={{ maxWidth: "45rem" }}>
        <div >
          <Typography.Text >Assignments Progress</Typography.Text>
          <Progress strokeColor={{ from: Theme.PRIMARY_COLOR, to: "#87d068" }} percent={calculateProgress()} />
          <div></div>
        </div>
      </Card>
      <div style={{ display: "flex", justifyContent: "space-around", maxWidth: "45rem", marginTop: 20 }}>
        <div style={{ flexGrow: 2, marginRight: 20 }}>
          <Card size="small" title={<Typography.Text style={{ fontWeight: "bold" }}>This week</Typography.Text>} bodyStyle={{ padding: 10 }}>
            {items.length == 0 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> : items.map((item) => {
              return <Card key={item.dueDate} hoverable size="small" style={{ margin: "10px 0px" }} >
                <div style={{ display: "flex", alignItems: 'center', alignItems: "center" }}>
                  <Checkbox onChange={(e) => markAsDone(e, item)} />
                  <div style={{ marginLeft: 20, flexGrow: 3 }}>
                    <h4 style={{ fontWeight: 'bold' }}>{item.title}</h4>
                    <p style={{ fontSize: "0.7rem", fontFamily: "Roboto" }}>{item.desc}</p>
                  </div>
                  <div style={{ marginLeft: 20 }}>
                    <RightOutlined style={{ fontSize: "10px" }} />
                  </div>
                </div>
              </Card>
            })}
          </Card>
        </div>
        <div>
          <Card size="small" style={{ minWidth: "15rem" }} title={<Typography.Text style={{ fontWeight: "bold" }}>Notifications</Typography.Text>}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </Card>
        </div>
      </div>
    </MainLayout >
  </>;
}
