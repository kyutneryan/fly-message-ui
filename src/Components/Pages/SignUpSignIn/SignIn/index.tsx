import React from 'react';
import { Layout } from 'antd';
import Kingdom11 from "../../../../assets/Kingdom11.png";
import LeftSide from '../LeftSide';

const { Header, Sider, Content } = Layout;

const SignIn = () => {
    return (
        <Layout style={{ height: "100vh" }}>
        <Sider width={444}>
        <LeftSide SiderImg={Kingdom11} />
      </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
              SignIn
          </Content> 
        </Layout>
      </Layout>
    );
}

export default SignIn;

