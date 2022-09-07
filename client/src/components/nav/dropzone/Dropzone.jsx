import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { FileImageOutlined } from "@ant-design/icons";
import axios from "axios";

import { Container, UploadZone, ImageZone } from "./DropzoneStyle";

function Dropimage() {
  const [image, setImage] = useState([]);

  const onDrop = (files) => {
    let formData = new FormData();
    formData.append("file", files[0]);
    axios
      .post("http://localhost:7000/api/product/image", formData)
      .then((res) => {
        if (res.data.success) {
          console.log(res.data);
        } else {
          console.log(res.data);
        }
      });
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
      <ImageZone></ImageZone>
    </Container>
  );
}

export default Dropimage;
