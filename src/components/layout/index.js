import React, { useContext } from "react";
import { ConfigContext } from "../../context";
import "./index.scss";
import { InstagramOutlined, TikTokOutlined } from "@ant-design/icons";
import { Menu, ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";

export const Layout = ({ children }) => {
  const config = useContext(ConfigContext);
  const navigate = useNavigate();
  const navigation = [
    {
      label: "PORTFOLIO",
      key: "portfolio",
    },
    {
      label: "BIO",
      key: "bio",
    },
    {
      label: "STORE",
      key: "store",
    },
    {
      label: "EXHIBITION",
      key: "exhibition",
    },
  ];
  return (
    <div className="layout">
      <div className="header">
        <div className="name">
          <span className="name-content" onClick={()=>navigate('/list')}>{config.name}</span>
          <span className="icon">
            <InstagramOutlined />
            <TikTokOutlined style={{marginLeft:'4px'}} />
          </span>
        </div>
        <div className="menu">
          <ConfigProvider
          theme={{
            components:{
                Menu:{
                    horizontalItemSelectedColor:'#000',
                }
            }
          }}
          >
            <Menu
              mode="horizontal"
              items={navigation}
              style={{fontSize:'18px'}}
              // selectedKeys={[current]}
            />
          </ConfigProvider>
        </div>
      </div>
      {children}
      {/* <div className="bottom">{config.copyright}</div> */}
    </div>
  );
};
