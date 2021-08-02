import React from "react";
import Header from "./Header";
import App from "./App";
import { useState, useEffect } from "react";

const Suggestions = ({ mood, socialize, location }) => {
    const [startOver, setStartOver] = useState(false);
    const [resultHeading, setResultHeading] = useState("");
    const [resultImg, setResultImg] = useState("");

    function handleRetakeQuiz() {
        setStartOver(true)
    }

    useEffect(() => {
        getData();
    })

    const getData = () => {
        fetch('data.json',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                let value = `${mood}${location}${socialize}`
                console.log(value);
                console.log(data[value].result);
                setResultHeading(data[value].result);
                setResultImg(data[value].source)
            }).catch((error) => console.log("There is an error!", error))
    }

    if (!startOver) {

        return (
            <>
                <Header />
                <div className="container">
                    <div className="heading2Div">
                        <h2>{resultHeading}</h2>
                    </div>
                    <div className="suggestionImage">
                        <img className="imgContent" src={resultImg} alt="" />
                    </div>
                    <div className="paraDiv">
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                    </div>
                    <div className="retakeDiv">
                        <button className="quizBtn" onClick={handleRetakeQuiz} type="button">Retake Quiz</button>
                    </div>
                </div>
            </>
        )

    }
    else {
        return (
            <App />
        )
    }

}

export default Suggestions;
