import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { FileImageOutlined } from "@ant-design/icons";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container, UploadZone, ImageZone, Image } from "./DropzoneStyle";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <UploadZone {...getRootProps()}>
              <input {...getInputProps()} />
              <FileImageOutlined style={{ fontSize: "15rem" }} />
            </UploadZone>
          </section>
        )}
      </Dropzone>
      <ImageZone>
        <div>
          <Slider {...settings}>
            {image.map((img, index) => (
              <Image
                key={index}
                src={`http://localhost:7000/${img}`}
                onClick={() => deleteImg(index)}
              />
            ))}
          </Slider>
        </div>
      </ImageZone>
    </Container>
  );
}

export default Dropimage;
