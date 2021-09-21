import React from 'react';
import { Layout } from 'antd';
import Kingdom1 from "../../../../assets/Kingdom11.png";
import LeftSide from '../LeftSide';

const { Header, Sider, Content } = Layout;

const SignUp = () => {
    return (
        <Layout style={{ height: "100vh" }}>
        <Sider width={444}>
        <LeftSide SiderImg={Kingdom1} />
      </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
              SignUp
          </Content> 
        </Layout>
      </Layout>
    );
}

export default SignUp;