import React from "react";
import { Layout, Menu } from "antd";
import  Icon  from '@ant-design/icons';
import InnerPage from "./InnerPage";
import SiderMenu from "./SiderMenu";

const { Header } = Layout;


export default function MainLayout(props) {
  return (
    <div>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} className="header" style={{ backgroundColor: "#00acee" }}>
        
      

          <h3
            style={{
              color: "#fff",
              fontSize: 22,
              fontFamily: 'Sumana',
              margin: 0,
              fontWeight: "bold",
            }}>

            Open Minds
          
          </h3>

          <Menu mode="horizontal" style={{ backgroundColor: "#00acee" }} defaultSelectedKeys={["2"]}>

          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          
          </Menu>
        
        </Header>


        <Layout>
          
          <InnerPage title={props.title}>
            {props.children}
          </InnerPage>
        </Layout>
      </Layout>
    </div>
  );
}
