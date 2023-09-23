import "./play.css";
import { useEffect, useMemo, useState } from "react";
import Timer from "./playcomponents/Timer";
import Trivia from "./playcomponents/Trivia";

import { ques } from '../../questions.js'
import { Link } from "react-router-dom";

function App() {
    const [username, setUsername] = useState(null);
    const [timeOut, setTimeOut] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [checkArray, setCheckArray] = useState(new Array(ques.length).fill(0));

    const handleScore = () => {
        setIncorrect(ques.length - correct)
    }
    const handleSubmit = () => {
        handleScore();
        setConfirm(true);
    }

    const handleNextButton = () => {
        const temp = [...checkArray];
        temp[questionNumber - 1] = 1;
        setCheckArray(temp);
        setQuestionNumber(questionNumber + 1);
    }

    return (
        <div className="h-[100vh] flex">
            {
                confirm ? (
                    <div className="absolute w-[90vw] h-[90vh] top-10 left-14 flex flex-col justify-center items-center z-10 bg-white border-4 rounded-xl">
                        <h1>Correct: {correct}</h1>
                        <h1>Incorrect: {incorrect}</h1>
                        <Link to="/" className="underline text-blue-900">return to home</Link>
                    </div>
                ) : <></>
            }
            <div className="border-2 border-white w-[75vw]">
                <div className="w-full flex flex-col h-[100vh]">
                    <div className="h-[10vh] flex justify-between">
                        <div className="w-[70px] h-[70px] flex items-center justify-center m-5 text-2xl border-4 text-black font-medium border-black bg-slate-200 rounded-full">
                            <Timer
                                setTimeOut={setTimeOut}
                                questionNumber={questionNumber}
                            />
                        </div>
                    </div>
                    <div className="h-[90vh] flex justify-center items-center">
                        <Trivia
                            data={ques}
                            questionNumber={questionNumber}
                            setQuestionNumber={setQuestionNumber}
                            setTimeOut={setTimeOut}
                            timeOut={timeOut}
                            checkArray={checkArray}
                            setCheckArray={setCheckArray}
                            setCorrect={setCorrect}
                            correct={correct}
                        />
                    </div>
                    <div className="flex justify-end h-[12vh]">
                        <button onClick={handleNextButton} className="border-2 bg-red-400 h-fit mr-10 hover:bg-red-300 border-black w-fit px-6 py-2 rounded">Skip</button>
                    </div>
                </div>
            </div>
            <div className="border-2 w-[25vw] flex flex-col justify-between items-around">
                <div className=" flex flex-wrap m-5 items-start justify-start">
                    {
                        ques.map((curr, id) => {
                            if (checkArray[curr.id - 1] === 2) {
                                return <div key={id} className="border-2 w-[10px] h-[10px] rounded-full flex justify-center m-2 items-center p-5 bg-black/10">{curr.id}</div>
                            }
                            else if (questionNumber === curr.id) {
                                return <div key={id} className="border-2 w-[10px] h-[10px] rounded-full flex justify-center m-2 items-center p-5 bg-yellow-500">{curr.id}</div>
                            }
                            else if (checkArray[curr.id - 1] === 1) {
                                return <div key={id} className="border-2 w-[10px] h-[10px] rounded-full flex justify-center m-2 items-center p-5 bg-transparent">{curr.id}</div>
                            }
                            else {

                                return <div key={id} className="border-2 w-[10px] h-[10px] rounded-full flex justify-center m-2 items-center p-5">{curr.id}</div>
                            }
                        })
                    }
                </div>
                <button onClick={handleSubmit} className="border-2 h-12 w-18 m-7 bg-green-500 hover:bg-green-400 border-black px-5 py-2 rounded">Submit</button>
            </div>
        </div >
    );
}

export default App;
