import React, { useState, useRef } from "react";
import { Upload, Modal, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";

const { Title } = Typography;

const ProfilePicture = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const previewImage = useRef("");
  const [fileList, setFileList] = useState([]);

  const getBase64 = (file: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handlePreview = async (file: any) => {
    if (!file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    previewImage.current = file.preview;
    setPreviewVisible(true);
  };

  return (
    <>
      <ImgCrop rotate>
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
          listType='picture-card'
          fileList={fileList}
          onPreview={handlePreview}
          onChange={({ fileList }: any) => {
            setFileList(fileList);
            console.log(fileList);
          }}
        >
          {fileList.length === 1 ? null : (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
      </ImgCrop>
      <Title level={3}>{"Hayk Kyutneryan"}</Title>
      <Modal
        visible={previewVisible}
        title='Profile Picture'
        footer={null}
        onCancel={() => setPreviewVisible(false)}
      >
        <img width='100%' alt='example' src={previewImage.current} />
      </Modal>
    </>
  );
};

export default ProfilePicture;
