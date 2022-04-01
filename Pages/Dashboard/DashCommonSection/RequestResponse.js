import React from "react";
import './RequestResponse.scss'
const RequestResponse = (props)=>{
    const {userphone,arrow,message} = props
    return(
        <>
           <div className="row send-mony-row">
            <div className="col-md-6 col-sm-10 mx-auto">
              <div className="leftContainer d-flex verticleAlign">
                <div className="leftImg d-flex verticleAlign">
                  <div className="img">
                    <img src={userphone} alt="leftImg" />
                    <p>Auserofstetup Click on send money </p>
                  </div>
                  <div className="arrow">
                    <img src={arrow} alt="leftArrow" />
                  </div>
                </div>
                <div className="leftContent">
                  <ul>
                    <li>Enter Beneficiary phone numbe</li>
                    <li>Create Secrete Question</li>
                    <li>Create the Answer</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-10 mx-auto">
              <div className="row rightContainer">
                <div className="col-md-5 col-sm-6 rightContainer1 p-0">
                  <ul className="inputList">
                    <li className="firstList">Country code+Phone number</li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div className="col-md-7 col-sm-6 ">
                  <div className="rightContainer2 d-flex">
                    <div className="verticleContent verticleAlign">
                      <div className="verticleDivider"></div>
                      <div className="verticleArrow">
                        <img src ={arrow} alt="arrow"/>
                      </div>
                    </div>
                    <div className="iconText verticleAlign">
                      <div className="icon ">
                        <img src={message} alt="icon" />
                      </div>
                      <br></br>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7 col-sm-12 ms-md-auto content py-4">
                  <p className="m-0">Theuser  walletaccountisdebited and  credit settlement account with the same amount. While the charges is credited to another general account.  
                    A transaction table of money send with dates is kept or maintained</p>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
export default RequestResponse