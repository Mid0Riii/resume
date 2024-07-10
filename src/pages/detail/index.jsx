import { Layout } from "../../components/layout";
import React from "react";
import { Image } from "antd";
import { useParams } from "react-router-dom";

const seriesCount = {
  1: 85,
};

export const Detail = (props) => {
  // 从路由中获取参数
  const { id } = useParams();
  const count = seriesCount[id];
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(
      <Image src={require(`../../static/series${id}/more/${i}.jpg`)} width={180} />
    );
  }
  return (
    <Layout>
      <div style={{paddingLeft:36}}>
        <Image.PreviewGroup>
            {images}
        </Image.PreviewGroup>
      </div>
    </Layout>
  );
};

export default Detail;
