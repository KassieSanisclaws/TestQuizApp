import React, { useState } from "react";
import "./testPage.css";
import  testQtsData  from "../../json-data/testData";

function TestPage(){
// Properties. //
  const testQuestions = testQtsData;
  const [currntQts, setCurrntQts] = useState(0);
  const [scoreCount, setScoreCount] = useState(0);
  const [finalScore, setFinalScore] = useState(false);

// Helper Functions. //
// check to see if the value of isAnswer is passing correct values. //
   const selectedOptn = (isAnswer) => {
      if(isAnswer){
        setScoreCount(scoreCount +1);
      } 
      if(currntQts + 1 < testQuestions.length){
        setCurrntQts(currntQts + 1);
      }else{
        setFinalScore(true);
      }      
  }
  const restartTest = () => {
       setScoreCount(0);
       setCurrntQts(0);
       setFinalScore(false);
  }

    return (
       <div className="testPage-body">
          <div className="testPage-section">
              <div className="testPage-container">
                
                <div className="test-cntnt1">
                    <div className="test-cntnt1-countr">Score:{scoreCount}</div>
                    <div className="test-cntnt1-title">NameOfTest</div>
                    <div className="test-cntnt1-btn"><button><span>Next</span><div className="test-cntnt1-btnR"/></button></div>
                </div>

                <div className="test-cntnt2">
                    <div className="test-cntnt2-chld1">
                        <div className="testCnt2-chld1-cnt">
                            <h2>Question{ currntQts + 1}/{testQuestions.length}</h2>   
                            <h3 className="testCnt2-chld1-cntTestQts">{testQuestions[currntQts].questions}</h3>
                        </div>
                    </div>
                {/* Final Socre Card Div*/}
                  {finalScore ? (
                    <div className="finalScore-card">
                      <h1>Results</h1>
                      <h2>{scoreCount} of {testQuestions.length} correct:({(scoreCount / testQuestions.length) * 100}%)</h2>
                      <button onClick={()=> restartTest()}>ResetQuiz</button>
                    </div>
                  ) : (
                  /* Questions Card Div*/
                    <div className="test-cntnt2-chld2">
                        
                        <div className="testCnt3-chld2-cnt">
                            <ul>
                               {testQuestions[currntQts].selections.map((selection) => { 
                                return (
                                   <li onClick={()=> selectedOptn(selection.isAnswer)} key={selection.id}>{selection.options}</li> 
                                );
                            })}    
                            </ul>   
                        </div>
                    </div>  
                  )}
                </div>

              </div>
          </div>
       </div>
    );
}

export default TestPage;