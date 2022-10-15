import React, { useState } from "react";
import "./testPage.css";
import  testQtsData  from "../../json-data/testData";
import { Link } from "react-router-dom";

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
                    <div className="test-cntnt1-countr glass"><span>Score:{scoreCount}</span></div>
                    <div className="test-cntnt1-title glass"><span>NameOfTest</span></div>
                    <div className="test-cntnt1-btn"><button><Link to="/test2" ><span>Next</span><div className="test-cntnt1-btnR"/></Link></button></div>
                </div>

                <div className="test-cntnt2">                 
                {/* Final Socre Card Div*/}
                  {finalScore ? (
                    <div className="finalScore-card glass">
                      <h1>Results</h1>
                      <h2>{scoreCount}/{testQuestions.length} correct:({(scoreCount / testQuestions.length) * 100}%)</h2>
                      <button onClick={()=> restartTest()} className="glass"><span>ResetQuiz</span></button>
                    </div>
                  ) : (
                   <div className="testPrntCard">
                    {/* Questions Card Div#1*/}
                    <div className="test-cntnt2-chld1">
                        <div className="testCnt2-chld1-cnt">
                            <h2>Question{ currntQts + 1}/{testQuestions.length}</h2>   
                            <h3 className="testCnt2-chld1-cntTestQts">{testQuestions[currntQts].questions}</h3>
                        </div>
                    </div>
                  {/* Questions Card Div#2*/}
                    <div className="test-cntnt2-chld2">
                        
                        <div className="testCnt3-chld2-cnt">
                              <h2>Select Your Answer Below.</h2>
                            <ul>
                               {testQuestions[currntQts].selections.map((selection) => { 
                                return (                              
                                        <li onClick={()=> selectedOptn(selection.isAnswer)} key={selection.id} className="glass">{selection.options}</li> 
                                );
                            })}    
                            </ul>   
                        </div>
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