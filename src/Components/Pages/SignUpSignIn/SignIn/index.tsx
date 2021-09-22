import React from 'react';
import {Link} from 'react-router-dom'
import { Layout, Form, Typography, Input, Button, Row, Col } from "antd";
import Kingdom11 from "../../../../assets/Kingdom11.png";
import LeftSide from '../LeftSide';
import Head from '../Head';
import { StyleTitle } from "./styles";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const SignIn = () => {

  const onFinish = (values: any) => {
   console.log(values)
  };

  // useEffect(() => {
  //   if (called && !loading && !error) {
  //     history.push("/users");
  //   }
  // }, [loading, called, error, history]);
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };



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
          <Row style={{ height: "85%" }} justify='center' align='middle'>
            <Col xxl={8} xl={10}>
              <Form
                name='basic'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout={"vertical"}
                size={"large"}
              >
                <StyleTitle>
                  <Title level={2}>Sign in to Fly</Title>
                </StyleTitle>

                <Form.Item label='Email'>
                  <Form.Item
                    name='email'
                    rules={[
                      { required: true, message: "Please input your email!" },
                      {
                        type: "email",
                        message: "The input is not valid email!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Form.Item>

                <Form.Item label='Password'>
                  <Form.Item
                    name='password'
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <div>
                      <Input.Password />
                      <Link to={"#"}>Forgot password?</Link>
                    </div>
                  </Form.Item>
                </Form.Item>

                <Form.Item>
                  <Button type='primary' htmlType='submit' block>
                    Sign in
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
          </Content> 
        </Layout>
      </Layout>
    );
}

export default SignIn;

