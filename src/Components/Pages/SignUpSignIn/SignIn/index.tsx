import React from 'react';
import {Link} from 'react-router-dom'
import { Layout } from 'antd';
import Kingdom11 from "../../../../assets/Kingdom11.png";
import LeftSide from '../LeftSide';
import Head from '../Head';

const { Header, Sider, Content } = Layout;

const SignIn = () => {
    return (
        <Layout style={{ height: "100vh" }}>
        <Sider style={{backgroundColor:'#000C17'}} width={444}>
        <LeftSide SiderImg={Kingdom11} />
      </Sider>
        <Layout>
          <Header style={{backgroundColor:'white'}} >
          <Head
            HeaderText='Not a member?'
            Link={<Link to='/signup'>Sign up</Link>}
          />
          </Header>
          <Content style={{backgroundColor:'white'}}>
              SignIn
          </Content> 
        </Layout>
      </Layout>
    );
}

export default SignIn;

