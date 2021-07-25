import React from "react";
import Header from "./Header";
import App from "./App";
import { useState } from "react";

const Suggestions = ({ mood, socialize, location }) => {
    const [startOver, setStartOver] = useState(false);

    function handleRetakeQuiz(e) {
        e.preventDefault();
        setStartOver(true)
    }
    if (startOver === false) {
        if (mood === "Relaxed" && location === "Indoors" && socialize === "Socialize") {
            return (
                <>
                    <Header />
                    <div className="container">
                        <div className="heading2Div">
                            <h2>Call your friends over for a board game!</h2>
                        </div>
                        <div className="suggestionImage">
                            <img className="mainImg" src="https://www.maketecheasier.com/assets/uploads/2020/11/best-sites-to-play-board-games-online-with-friends-feature.jpg" />
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
        } else if (mood === "Relaxed" && location === "Outdoors" && socialize === "Socialize") {
            return (
                <div>
                    <Header />
                    <div className="container">
                        <div className="heading2Div">
                            <h2>Plan dinner with your friends and checkout that restaurant that's been on your mind for a while now!</h2>
                        </div>
                        <div className="suggestionImage">
                            <img className="mainImg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/stocksy-txp7516161ajch100-medium-1181867-1508525551.jpg" />
                        </div>
                        <div className="paraDiv">
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                        </div>
                        <div className="retakeDiv">
                            <button className="quizBtn" onClick={handleRetakeQuiz} type="button">Retake Quiz</button>
                        </div>
                    </div>
                </div>
            )
        } else if (mood === "Relaxed" && location === "Indoors" && socialize === "Solo") {
            return (
                <div>
                    <Header />
                    <div className="container">
                        <div className="heading2Div">
                            <h2>Let's make it a self care day! Try pampering yourself with skin care and hot shower!</h2>
                        </div>
                        <div className="suggestionImage">
                            <img className="mainImg" src="https://saitsa.com/wp-content/uploads/2020/09/1sc.jpg" />
                        </div>
                        <div className="paraDiv">
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                        </div>
                        <div className="retakeDiv">
                            <button className="quizBtn" onClick={handleRetakeQuiz} type="button">Retake Quiz</button>
                        </div>
                    </div>
                </div>
            )
        } else if (mood === "Relaxed" && location === "Outdoors" && socialize === "Solo") {
            return (
                <div>
                    <Header />
                    <div className="container">
                        <div className="heading2Div">
                            <h2>How about going for an evening walk! You never know, you might catch a sunset!</h2>
                        </div>
                        <div className="suggestionImage">
                            <img className="mainImg" src="https://image.shutterstock.com/image-photo/sunset-silhouettes-woman-dog-on-260nw-595642064.jpg" />
                        </div>
                        <div className="paraDiv">
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                        </div>
                        <div className="retakeDiv">
                            <button className="quizBtn" onClick={handleRetakeQuiz} type="button">Retake Quiz</button>
                        </div>
                    </div>
                </div>
            )
        } else if (mood === "Cheery" && location === "Outdoors" && socialize === "Solo") {
            return (
                <div>
                    <Header />
                    <div className="container">
                        <div className="heading2Div">
                            <h2>Going on a shopping spree seems like a good idea for you!</h2>
                        </div>
                        <div className="suggestionImage">
                            <img className="mainImg" src="https://www.familyconsumersciences.com/wp-content/uploads/shop.pic_.jpg" />
                        </div>
                        <div className="paraDiv">
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                        </div>
                        <div className="retakeDiv">
                            <button className="quizBtn" onClick={handleRetakeQuiz} type="button">Retake Quiz</button>
                        </div>
                    </div>
                </div>
            )
        } else if (mood === "Cheery" && location === "Outdoors" && socialize === "Socialize") {
            return (
                <div>
                    <Header />
                    <div className="container">
                        <div className="heading2Div">
                            <h2>C'mon get ready and hit the club with your buddies!</h2>
                        </div>
                        <div className="suggestionImage">
                            <img className="mainImg" src="https://cdn.shopify.com/s/files/1/1442/3288/files/RUSH-opening-weekend-2_1024x1024.jpg?v=1551958191" />
                        </div>
                        <div className="paraDiv">
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                        </div>
                        <div className="retakeDiv">
                            <button className="quizBtn" onClick={handleRetakeQuiz} type="button">Retake Quiz</button>
                        </div>
                    </div>
                </div>
            )
        } else if (mood === "Cheery" && location === "Indoors" && socialize === "Solo") {
            return (
                <div>
                    <Header />
                    <div className="container">
                        <div className="heading2Div">
                            <h2>I think it's time for some wine tasting at home!</h2>
                        </div>
                        <div className="suggestionImage">
                            <img className="mainImg" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F04%2F29%2Fvirtual-wine-tastings-FT-BLOG0420.jpg" />
                        </div>
                        <div className="paraDiv">
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                        </div>
                        <div className="retakeDiv">
                            <button className="quizBtn" onClick={handleRetakeQuiz} type="button">Retake Quiz</button>
                        </div>
                    </div>
                </div>
            )
        } else if (mood === "Cheery" && location === "Indoors" && socialize === "Socialize") {
            return (
                <div>
                    <Header />
                    <div className="container">
                        <div className="heading2Div">
                            <h2>Throw your friends a house party!</h2>
                        </div>
                        <div className="suggestionImage">
                            <img className="mainImg" src="https://static.toiimg.com/thumb/msid-29853337,width-800,height-600,resizemode-75/29853337.jpg" />
                        </div>
                        <div className="paraDiv">
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                        </div>
                        <div className="retakeDiv">
                            <button className="quizBtn" onClick={handleRetakeQuiz} type="button">Retake Quiz</button>
                        </div>
                    </div>
                </div>
            )
        } else if (mood === "Productive" && location === "Indoors" && socialize === "Socialize") {
            return (
                <div>
                    <Header />
                    <div className="container">
                        <div className="heading2Div">
                            <h2>How about taking your friend's help in giving your home a new look!</h2>
                        </div>
                        <div className="suggestionImage">
                            <img className="mainImg" src="https://bobbyberk.com/wp-content/uploads/2020/01/Bobby-Berk_Interiors_Parents-House_33-scaled.jpg" />
                        </div>
                        <div className="paraDiv">
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                        </div>
                        <div className="retakeDiv">
                            <button className="quizBtn" onClick={handleRetakeQuiz} type="button">Retake Quiz</button>
                        </div>
                    </div>
                </div>
            )
        } else if (mood === "Productive" && location === "Indoors" && socialize === "Solo") {
            return (
                <div>
                    <Header />
                    <div className="container">
                        <div className="heading2Div">
                            <h2>The mop is waiting for you! Begin the weekend with some cleanliness!</h2>
                        </div>
                        <div className="suggestionImage">
                            <img className="mainImg" src="https://freshysites.com/wp-content/uploads/house-cleaning.jpg" />
                        </div>
                        <div className="paraDiv">
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                        </div>
                        <div className="retakeDiv">
                            <button className="quizBtn" onClick={handleRetakeQuiz} type="button">Retake Quiz</button>
                        </div>
                    </div>
                </div>
            )
        } else if (mood === "Productive" && location === "Outdoors" && socialize === "Socialize") {
            return (
                <div>
                    <Header />
                    <div className="container">
                        <div className="heading2Div">
                            <h2>Attend a networking event!</h2>
                        </div>
                        <div className="suggestionImage">
                            <img className="mainImg" src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_597940046_152606.jpg" />
                        </div>
                        <div className="paraDiv">
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                        </div>
                        <div className="retakeDiv">
                            <button className="quizBtn" onClick={handleRetakeQuiz} type="button">Retake Quiz</button>
                        </div>
                    </div>
                </div>
            )
        } else if (mood === "Productive" && location === "Outdoors" && socialize === "Solo") {
            return (
                <div>
                    <Header />
                    <div className="container">
                        <div className="heading2Div">
                            <h2>Go for grocery shopping and fill up that fridge!!</h2>
                        </div>
                        <div className="suggestionImage">
                            <img className="mainImg" src="https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/busyconsumers_0.jpg?itok=7RPdmM_R" />
                        </div>
                        <div className="paraDiv">
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                        </div>
                        <div className="retakeDiv">
                            <button className="quizBtn" onClick={handleRetakeQuiz} type="button">Retake Quiz</button>
                        </div>
                    </div>
                </div>
            )
        } else if (mood === "Snoozy") {
            return (
                <div>
                    <Header />
                    <div className="container">
                        <div className="heading2Div">
                            <h2>Ohh dearie! Just hit the bed and get your beauty sleep!</h2>
                        </div>
                        <div className="suggestionImage">
                            <img className="mainImg" src="https://asset.holidaycardsapp.com/assets/card/e_day_gdnt03-d363a1dcd5f62fde3adfbd5cb4fc73eb.png" />
                        </div>
                        <div className="paraDiv">
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
                        </div>
                        <div className="retakeDiv">
                            <button className="quizBtn" onClick={handleRetakeQuiz} type="button">Retake Quiz</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }

    } else {
        return (
            <App />
        )
    }

}

export default Suggestions;
