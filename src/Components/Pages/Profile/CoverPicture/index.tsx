import React from "react";
import { useState } from "react";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import { StyleCovPic } from "./styles";

function getBase64(file: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const CoverPicture = () => {
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const handlePreview = async ({ fileList }: any) => {
    if (!fileList[0].preview) {
      fileList[0].preview = await getBase64(fileList[0].originFileObj);
      console.log(fileList[0]);
    }
    setPreviewImage(fileList[0].preview);
    setFileList(fileList);
  };

  return (
    <StyleCovPic previewImage={previewImage}>
      <ImgCrop rotate aspect={2.5}>
        <Upload
          maxCount={1}
          action={(file: Blob) =>
            new Promise((resolve, reject) => {
              const reader: any = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => resolve(reader.result);
              reader.onerror = (error: string) => reject(error);
            })
          }
          showUploadList={false}
          fileList={fileList}
          onChange={handlePreview}
        >
          <Button
            type='primary'
            size='small'
            icon={<UploadOutlined />}
          ></Button>
        </Upload>
      </ImgCrop>
    </StyleCovPic>
  );
};

export default CoverPicture;
