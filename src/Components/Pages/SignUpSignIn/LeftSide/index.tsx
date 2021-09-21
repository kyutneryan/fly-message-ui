import React from "react";
import { Image } from "antd";
import FlyLogo from "../../../../assets/FlyLogo.png";
import { StyleImage, StyleLogo, StyleSider, StyleText } from "./styles";

type Props = {
  SiderImg: string;
};

const LeftSide = (props: Props) => {
  return (
    <StyleSider>
      <StyleLogo>
        <Image src={FlyLogo} preview={false}></Image>
        <StyleText>
          Follow your interests & hear what people are talking about.
        </StyleText>
      </StyleLogo>
      <StyleImage>
        <Image src={props.SiderImg} preview={false}></Image>
      </StyleImage>
    </StyleSider>
  );
};

export default LeftSide;