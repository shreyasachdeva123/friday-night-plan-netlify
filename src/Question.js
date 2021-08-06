import React, { useState, Suspense } from "react";
import Header from "./Header";
import Suggestions from "./Suggestions";
import Modal from "./Modal";
// import QuestionContent from "./QuestionContent";

const QuestionContent = React.lazy(() => import("./QuestionContent"));

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
                <Suspense fallback={<div>Loading...</div>}>
                    <QuestionContent questionDetails={questionDetails} handleNextQuestion={handleNextQuestion} handleUserInput={handleUserInput} activeQues={activeQues} />
                </Suspense>
            </>
        )
    } else if (!questionsAnswered && open === true) {
        return (
            <>
                <Modal setOpen={setOpen} />
                <>
                    <Header />
                    <Suspense fallback={<div>Loading...</div>} />
                    <QuestionContent questionDetails={questionDetails} handleNextQuestion={handleNextQuestion} handleUserInput={handleUserInput} activeQues={activeQues} />
                    <Suspense />
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