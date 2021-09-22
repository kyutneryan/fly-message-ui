import React from 'react';
import {Link} from 'react-router-dom'
import { Layout } from 'antd';
import Kingdom1 from "../../../../assets/Kingdom1.png";
import LeftSide from '../LeftSide';
import Head from '../Head';

const { Header, Sider, Content } = Layout;

const SignUp = () => {
    return (
        <Layout style={{ height: "100vh" }}>
        <Sider style={{backgroundColor:'#000C17'}} width={444}>
        <LeftSide SiderImg={Kingdom1} />
      </Sider>
        <Layout>
          <Header style={{backgroundColor:'white'}}>
          <Head
            HeaderText='Already a member?'
            Link={<Link to='/signin'>Sign in</Link>}
          />
          </Header>
          <Content style={{backgroundColor:"white"}}>
              SignUp
          </Content> 
        </Layout>
      </Layout>
    );
}

export default SignUp;