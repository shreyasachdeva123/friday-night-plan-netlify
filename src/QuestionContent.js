import React from "react";

const QuestionContent = ({ questionDetails, handleNextQuestion, handleUserInput, activeQues }) => {

    return (
        <>
            {// eslint-disable-next-line
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
}

export default QuestionContent;