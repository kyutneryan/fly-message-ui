import React from "react";
import { useHistory } from "react-router-dom";
import { Layout, Affix, Row, Col, Input } from "antd";
import MenuBar from "../MenuBar";
import PageHead from "../PageHead";

const { Sider, Content } = Layout;
const { Search } = Input;

const ProfilePage = () => {
  const history = useHistory();

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
              <div
                style={{
                  margin: 24,
                }}
              >
                Profilepage
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

export default ProfilePage;
