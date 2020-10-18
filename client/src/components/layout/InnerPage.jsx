import React from "react";
import { Layout, Typography, Breadcrumb } from "antd";
import Theme from "../../theme";
import SiderMenu from "./SiderMenu";

const { Content } = Layout;

const InnerPage = (props) => {
  const { title } = props;
  return (
    <Layout style={{ padding: "0 20px 20px" }}>
      <Breadcrumb style={{ margin: "20px 0px 20px 20px" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        style={{
          padding: "0px 20px 20px 20px",
          margin: 0,
          minHeight: 280,
        }}
      >
        <Typography.Title style={{ color: Theme.SECONDARY_COLOR, fontFamily: 'Sumana' }} level={2}>
          {title}
        </Typography.Title>
        {props.children}
      </Content>
    </Layout>
  );
}

export default InnerPage;