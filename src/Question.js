import React, { useState } from "react";
import Header from "./Header";
import Suggestions from "./Suggestions";
import Modal from "./Modal";

const Question = ({ questionDetails, setQuestionDetails }) => {
    const [activeQues, setActiveQues] = useState(0);
    const [questionsAnswered, setQuestionsAnswered] = useState(false);
    const questionDetailsLength = questionDetails.length - 1;
    const [open, setOpen] = useState(false);

    function handleNextQuestion() {
        if (questionDetails[activeQues].answer === undefined) {
            setOpen(true);
        } else {
            if (activeQues === questionDetailsLength) {
                setQuestionsAnswered(true);
            } else {
                setActiveQues(activeQues + 1)
            }
        }
    }

    function handleUserInput(e) {
        questionDetails[activeQues] = { ...questionDetails[activeQues], "answer": e.target.value }
        let modifiedQues = questionDetails[activeQues]
        questionDetails.splice(activeQues, 1, modifiedQues);
        setQuestionDetails([...questionDetails]);
    }

    if (!questionsAnswered && !open) {
        return (
            <>
                <Header />
                {
                    // eslint-disable-next-line
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
    } else if (!questionsAnswered && open === true) {
        return (
            <>
                <Modal setOpen={setOpen} />
                <>
                    <Header />
                    {
                        // eslint-disable-next-line
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
            </>
        )
    } else {
        return (
            <Suggestions questionDetails={questionDetails} />
        )
    }


}

export default Question;