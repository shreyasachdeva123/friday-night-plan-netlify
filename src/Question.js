import React from "react";
import Header from "./Header";

const Question = ({ quizQuestions, quizOptions, images, setQuesAnswered, callBack, id, choice }) => {

    return (
        <>
            <Header />
            <div className="container">
                <div className="heading2Div">
                    <h2> {quizQuestions} </h2>
                </div>
                <div className="options" >
                    {
                        quizOptions.map((value) =>
                        (<>
                            <div className="selectOptions">
                                <input key={value}
                                    type="radio"
                                    id={id}
                                    name="radioBtn"
                                    value={value}
                                    onChange={
                                        () => { callBack(value); console.log(value); }}
                                />
                                <label htmlFor="mood"
                                    key={value.toUpperCase()}
                                > {value} </label>
                            </div>
                        </>
                        )
                        )
                    }
                </div>
                <div className="imgDiv" >
                    <img className="mainImg" src={images} alt="" />
                </div>
                <div className="quesBtnDiv" >
                    <button type="button"
                        className="quizBtn"
                        onClick={() => { if (choice === "") { alert("Select a value from the given options!"); } else { setQuesAnswered(true); console.log(choice) }; }}> Next Question </button>
                </div>
            </div>
        </>
    )

}

export default Question;