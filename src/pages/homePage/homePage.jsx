import React from "react";
import "./homePage.css";
import CouponIcon from "../../images/iconImages/couponIcon.png";
import VoucherIcon from "../../images/iconImages/voucherIcon.png";
import ProgrammingPic from "../../images/bgImages/progPic.png";

function HomePage() {
  return (
     <div className="home-body">
        <div className="home-section">
             
             <div className="home-cntnt1">
                 <div className="home-cntnt1-innr">
                     <div className="home-cntnt1-innrChld1-div1">
                      <h2>Dev's-Tests</h2>
                      <div className="cntnt1-innrChld1-div1-p"><p>Our Interview Screeniong Test Prepare you The Right Way For Tech Interviews:</p></div>
                      <div className="cntnt1-innrChld1-div1Btns"><button className="cntnt1-innrChld1-div1Btns-btn"><span>Try4Free</span></button><button className="cntnt1-innrChld1-div1Btns-btn"><span>LiveResources</span></button></div>
                      <div className="cntnt1-innrChld1-div1Sales">
                       <div className="cntnt1-innrChld1-div1Sales-innr">
                       <img src={CouponIcon} alt="couponIcon"/>
                       <img src={VoucherIcon} alt="voucherIcon"/>
                       <p>Discount's 2 Success!</p>
                       </div>   
                      </div>
                     </div>
                     <div className="home-cntnt1-innrChld1-div2"><div className="home-cntnt1-innrChld1-div2Img"/></div>
                 </div>
             </div>
             <div className="home-cntnt2">
               <div className="home-cntnt2-innr">
                    <div className="home-cntnt2-innr-img">
                      <img src={ProgrammingPic} alt="programmingPic"/>
                    </div>
                    <div className="home-cntnt2-innr-textBtn">
                       <h2>A Barometer For job Success!</h2>
                       <p>Predict real-world job performance using our library of 253 scientifically validated tests.
                          Test candidates for job-specific skills like coding or digital marketing, as well as more general 
                          skills like critical thinking. Our unique personality and value tests allow you to get to know your
                          applicants as real people - not just pieces of paper.</p>
                       <button className="home-cntnt2-innrBtn-span"><span>See Tests</span></button>
                    </div>
               </div>
             </div>
             <div className="home-cntnt3">
                 <div className="home-cntnt3-innr">
                    <div className="home-cntnt3-innr-chld1">
                      <div className="home-cntnt3-innr-chld1-img"/>
                    </div>
                    <div className="home-cntnt3-innr-chld2">
                      <div className="home-cntnt3-innr-chld2-img"/>
                       <h2>Say GoodBye To Unconscious Bias.</h2>
                       <p>Diverse teams perform better.
                          With Dev'sTest, you give all applicants an equal, unbiased opportunity to showcase themselves.
                          This ensures you get the best talent from all walks of life.</p>
                       <div className="home-cntnt3-innr-img"/>
                    </div>
                 </div>
             </div>
             <div className="home-cntnt4">
                <div className="home-cntnt4-innr">
                  <iframe width="1430" height="664" src="https://www.youtube.com/embed/ypOnlAHF5yQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
             </div>
       
        </div>
     </div>
  );
}

export default HomePage;