import React, { useState } from "react";
import Header from "./Header";
import Suggestions from "./Suggestions";

const Question = ({ questionDetails, setQuestionDetails }) => {
    const [activeQues, setActiveQues] = useState(0);
    const [questionsAnswered, setQuestionsAnswered] = useState(false);
    const questionDetailsLength = questionDetails.length - 1;

    function handleNextQuestion() {
        if (activeQues === questionDetailsLength) {
            setQuestionsAnswered(true);
        } else {
            setActiveQues(activeQues + 1);
        }
    }

    function handleUserInput(e) {
        questionDetails[activeQues] = { ...questionDetails[activeQues], "answer": e.target.value }
        let modifiedQues = questionDetails[activeQues]
        questionDetails.splice(activeQues, 1, modifiedQues);
        setQuestionDetails([...questionDetails]);
    }
    if (!questionsAnswered) {
        return (
            <>
                <Header />
                {
                    questionDetails.map((question, index) => {
                        if (activeQues === index) {
                            return (
                                <div className="container" key={index}>
                                    <div className="heading2Div">
                                        <h2>{question.question}</h2>
                                    </div>
                                    <div className="options">
                                        {question.options.map((option, index) => {
                                            return (
                                                <div className="selectOptions">
                                                    <input type="radio" value={option} name="radioBtn" id={index} key={option.toUpperCase()} onChange={handleUserInput} />
                                                    <label htmlFor={index} key={option}>{option}</label>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="imgContainer">
                                        <img className="imgContent" alt="question pic" src={question.image} />
                                    </div>
                                    <div className="quesBtnDiv">
                                        <button type="button" className="quizBtn" onClick={handleNextQuestion}>Next</button>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </>
        )
    } else {
        return (
            <Suggestions questionDetails={questionDetails} />
        )
    }


}

export default Question;