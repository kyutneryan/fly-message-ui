import React, { useState } from "react";
import { Row, Col, Input, Comment, Avatar, Form, Button, List } from "antd";
import { UserOutlined } from "@ant-design/icons";
import moment from "moment";
import { StylePost, StylePostContent, StylePosts } from "./styles";

const { TextArea } = Input;

const CommentList = ({ comments }: any) => (
  <List
    size='large'
    dataSource={comments}
    itemLayout='horizontal'
    renderItem={(props: any) => (
      <Comment
        style={{
          backgroundColor: "white",
          marginTop: "20px",
          padding: "0 24px",
          borderRadius: "4px",
        }}
        {...props}
      />
    )}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }: any) => (
  <>
    <Form.Item>
      <TextArea rows={5} onChange={onChange} value={value} />
    </Form.Item>
    <Row>
      <Col span='22'>
        <Row justify='end'>
          <Form.Item>
            <Button
              htmlType='submit'
              loading={submitting}
              onClick={onSubmit}
              type='primary'
            >
              Fly message
            </Button>
          </Form.Item>
        </Row>
      </Col>
    </Row>
  </>
);

function CreatePost() {
  const [comments, setComments]: any = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value || value.trim() === "") {
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setComments([
        {
          author: "Hayk Kyutneryan",
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content: <StylePostContent>{value.trim()}</StylePostContent>,
          datetime: moment().fromNow(),
        },
        ...comments,
      ]);
    }, 500);
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Row>
      <StylePost>
        <Comment
          avatar={
            <Avatar shape='square' size='large' icon={<UserOutlined />} />
          }
          content={
            <Editor
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </StylePost>
      <StylePosts>
        {comments.length > 0 && <CommentList comments={comments} />}
      </StylePosts>
    </Row>
  );
}

export default CreatePost;
