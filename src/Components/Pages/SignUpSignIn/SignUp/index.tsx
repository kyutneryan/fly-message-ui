import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Layout,
  Row,
  Col,
  Form,
  Input,
  Typography,
  Checkbox,
  Button,
} from "antd";
import Kingdom1 from "../../../../assets/Kingdom1.png";
import LeftSide from "../LeftSide";
import { StyleTitle } from "../SignIn/styles";
import Head from "../Head";
import { useMutation, gql } from "@apollo/client";

const { Title, Text, Paragraph } = Typography;
const { Header, Sider, Content } = Layout;

const ADD_USER = gql`
  mutation FormSignUp(
    $name: String
    $surname: String
    $email: String!
    $password: String!
  ) {
    signup(name: $name, surname: $surname, email: $email, password: $password) {
      token
    }
  }
`;

const SignUp = () => {
  const [signUpError, setSignUpError] = useState("")
  const history = useHistory();
  const [signup] = useMutation(ADD_USER);

  const onFinish = async (values: any) => {
    try{
      const {
      data: {
        signup: { token },
      },
    } = await signup({
      variables: values,
    });
    if (token) {
      localStorage.setItem("token", token);
      history.push("/");
    }
    }
    catch{
setSignUpError("This email address is already in use")
    }
    
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider width={444}>
        <LeftSide SiderImg={Kingdom1} />
      </Sider>
      <Layout>
        <Header>
          <Head
            HeaderText='Already a member?'
            Link={<Link to='/signin'>Sign in</Link>}
          />
        </Header>
        <Content style={{ backgroundColor: "white" }}>
          <Row justify='center' align='middle' style={{ height: "85%" }}>
            <Col xxl={8} xl={10}>
              <Form
                name='basic'
                initialValues={{ remember: true, agreement: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout={"vertical"}
                size={"large"}
              >
                <StyleTitle>
                  <Title level={2}>Sign up to Fly</Title>
                  <Paragraph type='danger'>{signUpError}</Paragraph>
                </StyleTitle>

                <Row gutter={[16, 0]}>
                  <Col span={12}>
                    <Form.Item label='Name'>
                      <Form.Item
                        name='name'
                        noStyle
                        rules={[
                          {
                            required: true,
                            message: "Please input your name!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label='Surname'>
                      <Form.Item
                        name='surname'
                        noStyle
                        rules={[
                          {
                            required: true,
                            message: "Please input your surname!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <Form.Item label='Email'>
                      <Form.Item
                        name='email'
                        noStyle
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                          {
                            type: "email",
                            message: "The input is not valid email!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item label='Password'>
                      <Form.Item
                        name='password'
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                          {
                            min: 6,
                            message: "Password must be minimum 6 characters.",
                          },
                        ]}
                      >
                        <Input.Password
                          placeholder={"6+ characters"}
                          visibilityToggle={false}
                        />
                      </Form.Item>
                    </Form.Item>
                    <Form.Item>
                      <Form.Item name='agreement'>
                        <Checkbox
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                          checked={true}
                        >
                          <Text type='secondary'>
                            Creating an account means you’re okay with our Terms
                            of Service, Privacy Policy, and our default
                            Notification Settings.
                          </Text>
                        </Checkbox>
                      </Form.Item>
                    </Form.Item>
                    <Form.Item>
                      <Button type='primary' htmlType='submit' block>
                        Create an account
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SignUp;
