import React from "react";
import { Layout, Menu } from "antd";

import InnerPage from "./InnerPage";
import SiderMenu from "./SiderMenu";

const { Header } = Layout;

export default function MainLayout(props) {
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Header className="header" style={{ backgroundColor: "#C8102E" }}>
          <h3
            style={{
              color: "#fff",
              fontSize: 22,
              fontFamily: 'Sumana',
              margin: 0,
              fontWeight: "bold",
            }}
          >
            Scholarly
          </h3>
          <Menu
            mode="horizontal"
            style={{ backgroundColor: "#C8102E" }}
            theme="dark"
            defaultSelectedKeys={["2"]}
          ></Menu>
        </Header>
        <Layout>
          <SiderMenu />
          <InnerPage title={props.title}>
            {props.children}
          </InnerPage>
        </Layout>
      </Layout>
    </div>
  );
}
