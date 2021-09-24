import React from "react";
import { Layout, Affix, Row, Col, Input } from "antd";
import MenuBar from "../MenuBar";
import PageHead from "../PageHead";
import CreatePost from "../CreatePost";

const { Sider, Content } = Layout;
const { Search } = Input;

const Home = () => {
  return (
    <Layout>
      <Sider width={256}>
        <Affix offsetTop={0}>
          <div>
            <MenuBar defaultMenuKey='1' />
          </div>
        </Affix>
      </Sider>
      <Layout>
        <Affix offsetTop={0}>
          <div>
            <PageHead title='Home' />
          </div>
        </Affix>
        <Content>
          <Row>
            <Col span={17}>
              <div
                style={{
                  margin: 24,
                }}
              >
                <CreatePost />
              </div>
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

export default Home;
