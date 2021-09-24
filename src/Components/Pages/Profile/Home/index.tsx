import React from "react";
import { Layout, Affix, Row, Col, Input } from "antd";
import MenuBar from "../MenuBar";
import PageHead from "../PageHead";
import CreatePost from "../CreatePost";
import { StyleCreatePost, StyleSearchBar, StyleWhoToFollow } from "./styles";

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
              <StyleCreatePost>
                <CreatePost />
              </StyleCreatePost>
            </Col>
            <Col span={7}>
              <div>
                <Affix offsetTop={95}>
                  <StyleSearchBar>
                    <Search size='large' />
                    <StyleWhoToFollow>Who To Follow</StyleWhoToFollow>
                  </StyleSearchBar>
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
