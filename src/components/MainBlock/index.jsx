import React from "react";
import "./index.css";
import { CaretDownOutlined } from "@ant-design/icons";
import pic2 from "../../images/header.png";
import pic3 from "../../images/icon.png";
import pic4 from "../../images/logo.png";
import pic5 from "../../images/riot games.png";
import pic6 from "../../images/Rectangle 128.png";
export const MainBlock = () => {
  return (
    // creating main block
    <div className="main">
      <div>
        {/* <img src={pic1}></img> */}
        {/* second main block */}
        <div>
          {/* header */}
          <div className="header">
            <div className="container">
              <div>
                <img className="itemOne" src={pic5}></img>
                <img className="itemOne" src={pic6}></img>
                <img src={pic4}></img>
              </div>
              <ul>
                <li>GAME</li>
                <li>CHAMPIONS</li>
                <li>
                  NEWS <CaretDownOutlined />
                </li>
                <li>PATCH NOTES</li>
                <li>
                  DISCOVER <CaretDownOutlined />
                </li>
                <li>ESPORTS</li>
                <li>INIVERSE</li>
                <li>SHOP</li>
                <li>SUPPORT</li>
              </ul>
              <div className="itemTwo">
                <img src={pic3}></img>
              </div>
              <span className="unepickid">
                UNEPICKID <CaretDownOutlined />
              </span>
            </div>
          </div>

          {/* content */}
          <div></div>

          {/*footer */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

// const styles = {
//   backgroundImage: `url(${pic1})`,
//   width: "1320px",
//   height: "700px",
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
// };
