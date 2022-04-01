import React from "react";
import "./Second.scss";
import { RequestResponse } from "../DashCommonSection";
import userphone from "../../../assets/images/user-phone.png";
import arrow from "../../../assets/images/arrow.png";
import message from "../../../assets/images/message.png";
const SecondView = () => {
  return (
    <>
      <section className="second-container">
        <div className="container-fluid">
          <div className="row head">
            <h4 className="display-3 text-center">How to Send Money</h4>
          </div>
         <RequestResponse userphone={userphone} arrow={arrow} message={message}/>
        </div>
      </section>
    </>
  );
};
export default SecondView;
