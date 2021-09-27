import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { Layout, Form, Typography, Input, Button, Row, Col } from "antd";
import Kingdom11 from "../../../../assets/Kingdom11.png";
import LeftSide from "../LeftSide";
import Head from "../Head";
import { StyleTitle } from "./styles";
import { useMutation, gql } from "@apollo/client";

const { Header, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

const SIGNIN_USER = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const SignIn = () => {
 const [loginError, setLoginError] = useState("")
  const [login] = useMutation(SIGNIN_USER)
  const history = useHistory();

  const onFinish = async (values: any) => {
    try{
      const {
      data: {
        login: { token },
      },
    } = await login({
      variables: values,
    });

    if (token) {
      localStorage.setItem("token", token);
      history.push("/home");
    }
    }
    catch(e:any){
      setLoginError('The email address or password is incorrect. Please retry...')
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider width={444}>
        <LeftSide SiderImg={Kingdom11} />
      </Sider>
      <Layout>
        <Header>
          <Head
            HeaderText='Not a member?'
            Link={<Link to='/signup'>Sign up</Link>}
          />
        </Header>
        <Content style={{ backgroundColor: "white" }}>
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
                  <Paragraph type="danger" >{loginError}</Paragraph>
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
};

export default SignIn;
