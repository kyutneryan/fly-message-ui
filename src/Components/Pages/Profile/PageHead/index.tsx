import React from "react";
import { PageHeader } from "antd";

type Props = {
  onBack?: () => void;
  title: string;
  subTitle?: string;
};

const PageHead = (props: Props) => {
  return (
    <div>
      <PageHeader
        onBack={props.onBack}
        title={props.title}
        subTitle={props.subTitle}
        ghost={false}
      />
    </div>
  );
};

export default PageHead;
