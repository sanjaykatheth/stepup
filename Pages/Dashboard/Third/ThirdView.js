import React from "react";
import { RequestResponse } from "../DashCommonSection";
import arrow from '../../../assets/images/arrow.png'
import desk from '../../../assets/images/desk.png'
import save from '../../../assets/images/save-money.png'
const ThirdView = () => {
  return (
    <>
      <section className="second-container">
        <div className="container-fluid">
          <div className="row head">
            <h4 className="display-3 text-center">How to Receive Money</h4>
          </div>
          <RequestResponse arrow ={
            arrow} userphone = {desk} message={save} />
        </div>
      </section>
    </>
  );
};
export default ThirdView;
