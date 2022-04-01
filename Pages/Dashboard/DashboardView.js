import React from 'react';
import user from '../../assets/images/user.png';
import wallet from '../../assets/images/wallet.png';
import graph from '../../assets/images/graph.png';
import save from '../../assets/images/save-money.png';
import phone from '../../assets/images/phone.png';
import money from '../../assets/images/money.png';
import document from '../../assets/images/document.png';
import loan from '../../assets/images/loan.png'
import piggy from '../../assets/images/piggy.png'
import insurance from '../../assets/images/insurance.png'
import refresh from '../../assets/images/refresh.png'
import mobile from '../../assets/images/mobile.png'
import coin from '../../assets/images/coin.png'
import home from '../../assets/images/home.png'
import home2 from '../../assets/images/home2.png'
import { FirstContainer } from './First';
import { SecondContainer } from './Second';
import { ThirdContainer } from './Third';

import './Dashboard.scss';

const DashboardView = () => {
  return (
    <>
      <section className="dashboard">
        <div className="container">
          <div className="row divider pb-4">
            <div className="col-lg-2 col-md-4 col-sm-6 order-1 order-md-0">
              <div className="left-container">
                <div className="image-sec">
                  <div className="user-image text-center">
                    <img src={user} alt="left-img" className="img-fluid" />
                    <p>Photo</p>
                  </div>
                  <div className="wallet-balance text-center">
                    <img src={wallet} alt="wallet-img" className="img-fluid" />
                    <p>
                      Wallet
                      <br />
                      Balance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-4 d-flex justify-content-center align-items-center flex-column text-center">
              <div className="middle-container">
                <h3>Merchant Transection</h3>
                <h3>Dash Board</h3>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="right-container">
                <div className="right-img">
                  <div className="graph-img text-center">
                    <img src={graph} alt="left-img" className="img-fluid" />
                    <p>
                      Cash Near You
                      <br />
                      <span>Trust and Value</span>
                    </p>
                  </div>
                  <div className="income-img text-center">
                    <img src={save} alt='income' className='img-fluid' />
                    <p>
                      Income
                      <br />
                      <span>Received</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row second-d-section '>
            <div className='wrapper'>
            <div className='main-container d-flex justify-content-between flex-wrap'>
              <div className='items '>
                 <div className='items-outer mb-3'>
                   <div className='items-inner'>
                   <div className="item-img">
                    <img src={phone} alt='item-img' />
                  </div>
                   </div>
                 </div>
                 <div className='item-content'>
                <h4>Customer<br/>Acct</h4>
                <h4>Opening<br/>KYC</h4>
              </div> 
              </div>
              <div className='items '>
                 <div className='items-outer mb-3'>
                   <div className='items-inner items-bg'>
                   <div className="item-img">
                    <img src={money} alt='item-img' />
                  </div>
                   </div>
                 </div>
                 <div className='item-content'>
                   <h4>Cash</h4>
                <h4>Depsote<br/>Withdrawel</h4>
              </div> 
              </div>
              <div className='items '>
                 <div className='items-outer mb-3'>
                   <div className='items-inner bg-orange'>
                   <div className="item-img">
                    <img src={document} alt='item-img' />
                  </div>
                   </div>
                 </div>
                 <div className='item-content'>
                <h4>Loan</h4>
                <h4>Application</h4>
              </div> 
              </div>
              <div className='items '>
                 <div className='items-outer mb-3'>
                   <div className='items-inner'>
                   <div className="item-img">
                    <img src={loan} alt='item-img' />
                  </div>
                   </div>
                 </div>
                 <div className='item-content'>
                <h4>Loan</h4>
                <h4>Disburment</h4>
              </div> 
              </div>
              <div className='items '>
                 <div className='items-outer mb-3'>
                   <div className='items-inner  items-bg'>
                   <div className="item-img">
                    <img src={piggy} alt='item-img' />
                  </div>
                   </div>
                 </div>
                 <div className='item-content'>
                <h4>SAvings</h4>
                <h4>Products</h4>
              </div> 
              </div>
              <div className='items '>
                 <div className='items-outer mb-3'>
                   <div className='items-inner bg-orange'>
                   <div className="item-img">
                    <img src={money} alt='item-img' />
                  </div>
                   </div>
                 </div>
                 <div className='item-content'>
                <h4>Agric loans</h4>
                <h4>Payments</h4>
              </div> 
              </div>
              <div className='items '>
                 <div className='items-outer mb-3'>
                   <div className='items-inner'>
                   <div className="item-img">
                    <img src={insurance} alt='item-img' />
                  </div>
                   </div>
                 </div>
                 <div className='item-content'>
                <h4>Micro</h4>
                <h4>Insurance</h4>
              </div> 
              </div>
            </div>
            </div>
          </div>
          <div className='row second-d-section third-d-section'>
            <div className='wrapper'>
            <div className='main-container d-flex justify-content-between flex-wrap'>
              <div className='items '>
                 <div className='items-outer mb-3'>
                   <div className='items-inner items-bg'>
                   <div className="item-img">
                    <img src={piggy} alt='item-img' />
                  </div>
                   </div>
                 </div>
                 <div className='item-content'>
                <h4>Government</h4>
                <h4>Registration<br/>Service</h4>
              </div> 
              </div>
              <div className='items '>
                 <div className='items-outer mb-3'>
                   <div className='items-inner bg-orange'>
                   <div className="item-img">
                    <img src={refresh} alt='item-img' />
                  </div>
                   </div>
                 </div>
                 <div className='item-content'>
                <h4>Remitence<br/>Local</h4>
                <h4>&international</h4>
              </div> 
              </div>
              <div className='items '>
                 <div className='items-outer mb-3'>
                   <div className='items-inner'>
                   <div className="item-img">
                    <img src={mobile} alt='item-img' />
                  </div>
                   </div>
                 </div>
                 <div className='item-content'>
                <h4>Top-up and</h4>
                <h4>Bill Payments</h4>
              </div> 
              </div>
              <div className='items '>
                 <div className='items-outer mb-3'>
                   <div className='items-inner items-bg'>
                   <div className="item-img">
                    <img src={coin} alt='item-img' />
                  </div>
                   </div>
                 </div>
                 <div className='item-content'>
                <h4>Local Govt<br/>Tax or Lavy</h4>
                <h4>Payments</h4>
              </div> 
              </div>
              <div className='items '>
                 <div className='items-outer mb-3'>
                   <div className='items-inner  bg-orange'>
                   <div className="item-img">
                    <img src={home} alt='item-img' />
                  </div>
                   </div>
                 </div>
                 <div className='item-content'>
                <h4>Interbanks</h4>
                <h4>Transfers</h4>
              </div> 
              </div>    
              <div className='items '>
                 <div className='items-outer mb-3'>
                   <div className='items-inner'>
                   <div className="item-img">
                    <img src={home2} alt='item-img' />
                  </div>
                   </div>
                 </div>
                 <div className='item-content'>
                <h4>Government<br/>Subsidy</h4>
                <h4>Destribution</h4>
              </div> 
              </div>        
            </div>
            </div>
          </div>
        </div>
      </section>
      <FirstContainer/>
      <SecondContainer/>
      <ThirdContainer/>
    </>
  );
};
export default DashboardView;
