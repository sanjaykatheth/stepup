import React from "react";
import './First.scss'
import Group from '../../../assets/images/Group .png'
const FirstView = () => {
  return (
    <>
      <section className="first-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-4 col-10 mx-auto">
              <div className="firstLeft">
                <img src={Group} alt="firstLeft" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-8 col-10 mx-auto">
              <div className="firstRight">
                <h1 className="m-0 fw-bold">What is Stepup 'Cash Near You Service'</h1>
                <p>
                  ‘“Cash Near You”( Pan African Money Service Platform) is being
                  created to provide a platform where those who are financially
                  excluded can have access to financial services including
                  insurance across Africa. It is also a platform being created
                  to provide alternative mean of receiving money from anywhere,
                  open a bank account of any of your choice, deposit and funds
                  transfer irrespective of the bank where you have accounts
                  without using the regular channels like ATM, bank branch etc.
                  <br />
                  <br />
                  We see a huge opportunity in merchant locations where there is
                  a regular in and out of cashflow on a daily and we hope to
                  turn such locations to financial centers using simple and easy
                  to use technologies for operations.
                </p>
                <h3 className="m-0 text-center">Anticipated Outcomes</h3>
                <p className="secondText">
                  At the end of the projectwe hoped to have created a platform
                  that has a network of merchants across Africa but starting
                  with Nigeria where anybody including those financially
                  excluded can walk in and do financial and micro insurance
                  transactions easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default FirstView;
