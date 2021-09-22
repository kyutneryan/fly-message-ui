import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Image } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import FlyLogo from "../../../../assets/FlyLogo.png";

type Props = {
  defaultMenuKey: string;
};

const MenuBar = (props: Props) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div style={{ margin: "23px 0 24px 16px" }}>
          <Image preview={false} src={FlyLogo}></Image>
        </div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={[props.defaultMenuKey]}
        >
          <Menu.Item key='1' icon={<HomeOutlined />}>
            <Link to='/home'>Home</Link>
          </Menu.Item>
          <Menu.Item key='2' icon={<UserOutlined />}>
            <Link to='/profile'>Profile</Link>
          </Menu.Item>
        </Menu>
      </div>

      <div style={{ padding: "48px 16px" }}>
        <Button size='large' type='primary' block>
          Fly my story!
        </Button>
      </div>
    </div>
  );
};

export default MenuBar;
