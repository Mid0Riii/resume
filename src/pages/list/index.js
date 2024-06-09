import React, { useContext } from "react";
import "./index.scss";
import { ConfigContext } from "../../context";
import { Layout } from "../../components/layout";
export const List = () => {
  const { works } = useContext(ConfigContext);
  return (
    <Layout>
      <div className="list-container">
        {works.map((work, index) => {
          return (
            <div key={index} className="work" style={{
                background: `url(${work.background}) no-repeat`,
            }}>
              <div className="title">{work.name}</div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default List;
