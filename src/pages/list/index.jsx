/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./index.scss";
import { Layout } from "../../components/layout";
import { Button, Carousel } from "antd";
import { useNavigate } from "react-router-dom";
export const List = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="list-container">
        {/* series 1 */}
        <div className="series series-1">
          <img style={{width:'400px',marginRight:64}} src={require("../../static/series1/2.jpg")}/>
          <img style={{width:'550px', marginBottom:24}} src={require("../../static/series1/1.png")}/>
          <div className="brief">
            <div>
              "In a satirical experiment critiquing the homogeneity of modern influencers, I created a TIKTOK account, adopting the stereotypical attire. Within just two months, this visually appealing formula attracted over 10,000 followers, revealing morden girls collective fascination with curated perfection."
            </div>
            <Button className="more-btn" onClick={()=>{
              navigate('/detail/1')
            }}>More</Button>
          </div>
        </div>
        {/* series 2 */}
        <div className="series series-2">
          <img style={{width:'400px',marginRight:64}} src={require("../../static/series2/1.png")}/>
          <img style={{width:'550px', marginBottom:24}} src={require("../../static/series2/2.png")}/>
          <div className="brief">
            <div>
            "Through this project, I want to express thr current state of repressed sex education,and tell teenagers about pleasure and desire,consent and boundaries,as well as physical feelings.We need to show them exactly the ways to express their feelings,and be open and curious about their experiences,so that they can live with their feelings instead of avoiding the topic of sex-which is sad to me.Confronting sex is insisting on one's right to be an audience of desire."
            </div>
            <Button className="more-btn">More</Button>
          </div>
        </div>        
        {/* series 3 */}
        <div className="series series-3">
          <img style={{width:'300px',marginRight:64}} src={require("../../static/series3/2.png")}/>
          <img style={{width:'400px', marginBottom:24}} src={require("../../static/series3/1.png")}/>
          <div className="brief">
            <div>
              People may ask: will there be aliens in the world? will we live with aliens in the future? will interracial relationships emerae? What will the wedding look like if humans marry aliens or robots? What kind of wedding dress will people wear then?
              So here's my answer.
            </div>
            <Button className="more-btn">More</Button>
          </div>
        </div>        
        {/* series 4 */}
        <div className="series series-4">
          <img style={{width:'400px',marginRight:64}} src={require("../../static/series4/2.png")}/>
          <img style={{width:'550px', marginBottom:24}} src={require("../../static/series4/1.jfif")}/>
          <div className="brief">
            <div>
            "My decision to accept was based on my desire to win, and to win bigger than I ever had before."
            </div>
            <Button className="more-btn">More</Button>
          </div>
        </div>        
        {/* series 5 */}
        <div className="series series-5">
          <img style={{width:'400px',marginRight:64}} src={require("../../static/series5/2.jfif")}/>
          <img style={{width:'200px', marginBottom:24}} src={require("../../static/series5/1.jfif")}/>
          <img style={{width:'300px', marginBottom:100, marginLeft:64}} src={require("../../static/series5/3.jpg")}/>
          <div className="brief">
            <div>"MYSTERIOUS CURIOSITY SHOP</div>
            <Button className="more-btn">More</Button>
          </div>
        </div>        
        {/* series 6 */}
        <div className="series series-6">
          <img style={{width:'600px',marginRight:64}} src={require("../../static/series6/1.png")}/>
          <img style={{width:'200px', marginBottom:24}} src={require("../../static/series6/2.png")}/>
          <div className="brief">
            <div>
            New design series dropping soon！！！！！！！！！！！
            </div>
            <Button className="more-btn">More</Button>
          </div>
        </div>        
        {/* series 7 */}
        <div className="series series-7">
          <div className="title">COLLABORATION SERIES</div>
          <Carousel autoplay>
            <img src={require("../../static/series7/1.png")}/>
            <img src={require("../../static/series7/2.png")}/>
            <img src={require("../../static/series7/3.png")}/>
          </Carousel>
        </div>
      </div>
    </Layout>
  );
};

export default List;
