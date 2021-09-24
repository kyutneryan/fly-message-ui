import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Image } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import FlyLogo from "../../../../assets/FlyLogo.png";
import { StyleMenuBar, StyleMenuBarLogo, StyleFlyMyStory } from "./styles";

type Props = {
  defaultMenuKey: string;
};

const MenuBar = (props: Props) => {
  return (
    <StyleMenuBar>
      <div>
        <StyleMenuBarLogo>
          <Image preview={false} src={FlyLogo}></Image>
        </StyleMenuBarLogo>
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
      <StyleFlyMyStory>
        <Button size='large' type='primary' block>
          Fly my story!
        </Button>
      </StyleFlyMyStory>
    </StyleMenuBar>
  );
};

export default MenuBar;
