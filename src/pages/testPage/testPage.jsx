import "./testPage.css";


function TestPage(){
    return (
       <div className="testPage-body">
          <div className="testPage-section">
              <div className="testPage-container">
                
                <div className="test-cntnt1">
                    <div className="test-cntnt1-countr">Counter</div>
                    <div className="test-cntnt1-title">NameOfTest</div>
                    <div className="test-cntnt1-btn"><button><span>Next</span><div className="test-cntnt1-btnR"/></button></div>
                </div>

                <div className="test-cntnt2">
                    <div className="test-cntnt2-chld1">
                        <div className="testCnt2-chld1-cnt">

                        </div>
                    </div>
                    <div className="test-cntnt2-chld2">
                        <div className="testCnt3-chld2-cnt">
                                      
                        </div>
                    </div>
                </div>

              </div>
          </div>
       </div>
    );
}

export default TestPage;