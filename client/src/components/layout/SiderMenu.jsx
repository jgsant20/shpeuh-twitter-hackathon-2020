import React from "react";
import { Menu, Layout } from "antd";
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function SiderMenu() {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item><Link to="/">Overview</Link></Menu.Item>
        <SubMenu title="Courses">
          <Menu.Item>Course 1</Menu.Item>
          <Menu.Item>Course 2</Menu.Item>
          <Menu.Item>Course 3</Menu.Item>
          <Menu.Item>Course 4</Menu.Item>
        </SubMenu>
        <Menu.Item key="grades"><Link to="/grades">Grades</Link></Menu.Item>
        <Menu.Item key="lectures"><Link to="/lectures"> Lecture</Link></Menu.Item>
        <Menu.Item key="calendar"><Link to="/calendar">Calendar</Link></Menu.Item>
        <Menu.Item key="studorgs">Student Organizations</Menu.Item>
        <Menu.Item key="appointments">Appointments</Menu.Item>
      </Menu>
    </Sider>
  );
}
