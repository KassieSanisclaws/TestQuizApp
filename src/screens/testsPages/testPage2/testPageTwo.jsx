import React, { useState } from "react";
import "./testPageTwo.css";
import data from "../../../json-data/testDataTwo";



function TestPageTwo() {
  // Data Simulation of DB. //
  const testQuestionsTwo = data; 
  // State Management. //
  const [currntQts, setCurrntQts] = useState(0);
  const [scoreCount, setScoreCount] = useState(0);
  const [finalScore, setFinalScore] = useState(false);

  // Radom Questions. //
  // create function randomize question. // 
  // currently working on shuffle for test questions. able to shuffle array looking to display in ui.//
    //  const shffleTestQuestions = testQuestionsTwo.sort(() => Math.random() - 0.5);
    //       console.log(shffleTestQuestions);

           

  // Helper Functions. //
  const selectedOptn = (isAnswer) => {
     if(isAnswer){
        setScoreCount(scoreCount + 1);
     }
     if(currntQts + 1 < testQuestionsTwo.length){
        setCurrntQts(currntQts +1)
     }else{
        setFinalScore(true);
     }
  }

  const resetTest = () => {
      setCurrntQts(0);
      setScoreCount(0);
      setFinalScore(false);
  }

    return (
       <div className="testPageTwo-body">
           <div className="testPageTwo-section">
               <div className="testPageTwo-container">
               <div className="testPageTwo-cntnt1">
                    <div className="testPageTwo-cntnt1-countr glass"><span>Score:{scoreCount}</span></div>
                    <div className="testPageTwo-cntnt1-title glass"><span>Guess It Out</span></div>
                    <div className="testPageTwo-cntnt1-btn"><button><span>Next</span><div className="testPageTwo-cntnt1-btnR"/></button></div>
                </div>

                <div className="testPageTwo-cntnt2">                 
                {/* Final Socre Card Div*/}
                  {finalScore ? (
                    <div className="testPageTwo-cntnt2-finalScore-card glass">
                      <h1>Results</h1>
                      <h2>{scoreCount}/{testQuestionsTwo.length} correct:({(scoreCount / testQuestionsTwo.length) * 100}%)</h2>
                      <button onClick={()=> resetTest()} className="glass"><span>ResetQuiz</span></button>
                    </div>
                  ) : (
                   <div className="testPageTwo-PrntCard">
                    {/* Questions Card Div#1*/}
                    <div className="testPageTwo-cntnt2-chld1">
                        <div className="testPageTwo-chld1-cnt">
                            <h2>Question{ currntQts + 1}/{testQuestionsTwo.length}</h2>   
                            <h3 className="testPageTwo-chld1-cntTestQts">{testQuestionsTwo[currntQts].questions}</h3>
                        </div>
                    </div>
                  {/* Questions Card Div#2*/}
                    <div className="testPageTwo-cntnt2-chld2">
                        
                        <div className="testPageTwo-Cnt3-chld2-cnt">
                              <h2>Select Your Answer Below.</h2>
                            <ul>
                               {testQuestionsTwo[currntQts].selections.map((selection) => { 
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
    )
}

export default TestPageTwo;