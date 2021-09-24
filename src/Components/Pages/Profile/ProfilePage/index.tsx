import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Layout,
  Affix,
  Row,
  Col,
  Input,
  Modal,
  Button,
  Form,
  DatePicker,
} from "antd";
import { EditOutlined } from "@ant-design/icons";
import MenuBar from "../MenuBar";
import PageHead from "../PageHead";
import CoverPicture from "../CoverPicture";
import ProfilePicture from "../ProfilePicture";
import {
  StyleProfilePage,
  StyleProfilePage1,
  StyleProfilePage2,
  StyleProfilePage3,
} from "./styles";

const { Sider, Content } = Layout;
const { Search } = Input;

const ProfilePage = () => {
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values: any) => {
    values.dateofbirth = values.dateofbirth.format("YYYY-MM-DD");
    console.log(values);
    setIsModalVisible(false);
  };

  return (
    <Layout>
      <Sider width={256}>
        <Affix offsetTop={0}>
          <div>
            <MenuBar defaultMenuKey='2' />
          </div>
        </Affix>
      </Sider>
      <Layout>
        <Affix offsetTop={0}>
          <div>
            <PageHead
              title={"Hayk Kyutneryan"}
              subTitle='My profile'
              onBack={() => history.push("/home")}
            />
          </div>
        </Affix>
        <Content>
          <Row>
            <Col span={17}>
              <StyleProfilePage>
                <CoverPicture />
                <StyleProfilePage1>
                  <StyleProfilePage2>
                    <ProfilePicture />
                  </StyleProfilePage2>
                  <StyleProfilePage3>
                    <Button type='primary' onClick={showModal}>
                      <EditOutlined /> Edit profile
                    </Button>
                    <Modal
                      bodyStyle={{ backgroundColor: "#F5F5F5" }}
                      footer={null}
                      title='Edit profile'
                      visible={isModalVisible}
                      onCancel={handleCancel}
                    >
                      <Form name='edit-profile' onFinish={onFinish}>
                        <Form.Item name='name'>
                          <Input placeholder='Name' />
                        </Form.Item>
                        <Form.Item name='surname'>
                          <Input placeholder='Surname' />
                        </Form.Item>
                        <Form.Item name='bio'>
                          <Input.TextArea placeholder='Bio' />
                        </Form.Item>
                        <Form.Item name='website'>
                          <Input placeholder='website' />
                        </Form.Item>
                        <Row justify='space-between'>
                          <Col>
                            <Form.Item name='dateofbirth'>
                              <DatePicker placeholder='Date of birth' />
                            </Form.Item>
                          </Col>
                          <Col>
                            <Form.Item>
                              <Button type='primary' htmlType='submit'>
                                Submit
                              </Button>
                            </Form.Item>
                          </Col>
                        </Row>
                      </Form>
                    </Modal>
                  </StyleProfilePage3>
                </StyleProfilePage1>
              </StyleProfilePage>
            </Col>
            <Col span={7}>
              <div>
                <Affix offsetTop={95}>
                  <div
                    style={{
                      margin: "0 24px 24px 0",
                    }}
                  >
                    <Search size='large' />
                    <div
                      style={{
                        margin: "28px 0 0",
                        backgroundColor: "white",
                      }}
                    >
                      Who To Follow
                    </div>
                  </div>
                </Affix>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProfilePage;
