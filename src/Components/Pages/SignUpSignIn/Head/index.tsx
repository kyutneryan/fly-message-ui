import React, { ReactNode } from "react";
import { Row, Col, Typography, Button } from "antd";

const { Text } = Typography;

type Props = {
  HeaderText: string;
  Link: ReactNode;
};

const Head = (props: Props) => {
  return (
    <Row justify='end'>
      <Col>
        <Text strong>{props.HeaderText}</Text>
        <Button type='link'>{props.Link}</Button>
      </Col>
    </Row>
  );
};

export default Head;