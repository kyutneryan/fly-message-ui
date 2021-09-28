import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Button, List, Skeleton, Avatar, Layout, Typography } from "antd";

const { Text } = Typography;
const { Footer } = Layout;

const ALL_USERS = gql`
  query Query($skip: Int!, $take: Int!) {
    allUsers(skip: $skip, take: $take) {
      name
      surname
      email
    }
  }
`;

const WhoToFollow = (): any => {
  const [initLoading, setInitLoading] = useState(true);
  const [load, setLoad] = useState(false);
  const [list, setList]: any = useState([]);
  const [skip, setSkip] = useState(0);

  const { loading, error, data }: any = useQuery(ALL_USERS, {
    variables: { skip: skip, take: 4 },
  });

  useEffect((): any => {
    if (loading) return null;
    if (error) return `Error! ${error}`;
    setInitLoading(false);
    if (!loading && data) {
      setList([...list, ...data.allUsers]);
      setLoad(false);
    }
  }, [loading, error, data]);

  const onLoadMore = () => {
    setSkip(skip + 4);
    setLoad(true);
  };

  const loadMore =
    !initLoading && !load ? (
      <Button onClick={onLoadMore} type='link'>
        See more
      </Button>
    ) : null;

  return (
    <div style={{ paddingLeft: "12px" }}>
      <div style={{ height: "373px", overflowY: "auto" }}>
        <List
          header={
            <div
              style={{
                fontWeight: "normal",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#262626",
              }}
            >
              Who to follow
            </div>
          }
          loading={initLoading}
          itemLayout='horizontal'
          loadMore={loadMore}
          dataSource={list}
          renderItem={(item: any) => (
            <List.Item actions={[<Button size='small'>Follow</Button>]}>
              <Skeleton avatar title={false} loading={item.load} active>
                <List.Item.Meta
                  avatar={
                    <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                  }
                  title={<a href='/#'>{item.name + " " + item.surname}</a>}
                  description={item.email}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
      <Footer>
        <Text type='secondary'>
          Terms of service Privacy policy
          <br />© 2021 Twitter, Inc.
        </Text>
      </Footer>
    </div>
  );
};

export default WhoToFollow;
