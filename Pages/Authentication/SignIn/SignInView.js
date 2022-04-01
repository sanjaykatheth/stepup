import React from 'react';
import './SignIn.scss';
import { CustomInput } from '../../../Common/CustomInput';
import img1 from '../../../assets/images/bg.jpg';
const SignInView = (props) => {
  return (
    <>
      <section id="signin">
        <div className="container">
          <div className="row signin-row">
            <div
              className="col-8 signin-img d-flex align-items-center"
              style={{
                backgroundImage: 'url(' + img1 + ')'
              }}>
              <div className="signin-img "></div>
            </div>
            <div className="col-4 p-4  bg-white right-container">
              <h3 className="text-center">Step Up</h3>
              <div className="signin-form">
                <form onSubmit={props.onSubmit}>
                  <CustomInput
                    label="User Id / CODE:"
                    placeholder="eg-272-xxx-xx"
                    icon="fa fa-user"
                    type="number"
                  />
                  <CustomInput
                    label="Password"
                    placeholder="Password"
                    icon="fa fa-lock"
                    type="password"
                  />
                  <div className="signin-button">
                    <button type="submit" className="btn fw-bold">
                      <span>
                        <i className='fa fa-sign-out text-white' aria-hidden='true'></i>
                      </span>
                      Log In
                    </button>
                  </div>
                  <div className="signin-account text-center">
                    <h5>Forgot Your Email or password ? </h5>
                    <p>
                      Do not have an account ? <span>Create an Account</span>
                    </p>
                  </div>
                  <div className="signin-bottom text-center">
                    <p>
                      By signing in i acknowledge that i have read and <br />
                      understand the
                      <br />
                      <a href="#">Terms | Policy</a> when using step Up
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignInView;
