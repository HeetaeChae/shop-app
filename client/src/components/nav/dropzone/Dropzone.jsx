import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { FileImageOutlined } from "@ant-design/icons";
import axios from "axios";

import { Container, UploadZone, ImageZone } from "./DropzoneStyle";

function Dropimage({ setProductImg }) {
  const [image, setImage] = useState([]);

  const onDrop = (files) => {
    let formData = new FormData();
    formData.append("file", files[0]);
    axios
      .post("http://localhost:7000/api/product/image", formData)
      .then((res) => {
        if (res.data.success) {
          setImage([...image, res.data.fileName]);
          setProductImg([...image, res.data.fileName]);
        } else {
          alert("이미지 업로드 실패");
        }
        return image;
      });
  };

  const deleteImg = (i) => {
    let deletedImage = [...image];
    deletedImage.splice(i, 1);
    setImage(deletedImage);
  };

  return (
    <Container>
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <UploadZone {...getRootProps()}>
              <input {...getInputProps()} />
              <FileImageOutlined style={{ fontSize: "5rem" }} />
            </UploadZone>
          </section>
        )}
      </Dropzone>
      <ImageZone>
        <div style={{ display: "flex", overflow: "scroll" }}>
          {image.map((img, index) => (
            <img
              key={index}
              src={`http://localhost:7000/${img}`}
              style={{ maxWidth: "13rem", height: "11rem" }}
              onClick={() => deleteImg(index)}
            />
          ))}
        </div>
      </ImageZone>
    </Container>
  );
}

export default Dropimage;
