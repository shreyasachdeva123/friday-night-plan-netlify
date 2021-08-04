import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Question from "./Question";


const App = () => {
    const [quizStarted, setQuizStarted] = useState(false);
    const [questionDetails, setQuestionDetails] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getQuestionData();
    }, [])

    function getQuestionData() {
        fetch('quizQuestions.json',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then((response) =>
                response.json()
            )
            .then((data) => {
                console.log(data);
                setQuestionDetails([...data.questionDetails]);
                setLoading(false);
            })
            .catch((error) => console.log("There is an error!", error))
    }

    function handleStartQuiz() {
        setQuizStarted(true);
    }

    if (!quizStarted) {
        return (
            <div className="wrapper">
                <Header />
                <div className="container">
                    <div className="heading2Div">
                        <h2>Take a quiz to plan your Friday!</h2>
                    </div>
                    <div className="imgContainer">
                        <img className="imgContent" src="https://images.pexels.com/photos/7262770/pexels-photo-7262770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="friday night" />
                    </div>
                    <div className="paraDiv">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                    </div>
                    <div className="startBtn">
                        <button className="quizBtn" type="button" onClick={handleStartQuiz}>Start Quiz</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <Question questionDetails={questionDetails} setQuestionDetails={setQuestionDetails} loading={loading} />
        )
    }
}

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));
export default App;

