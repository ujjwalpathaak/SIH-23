import "./play.css";
import { useEffect, useMemo, useState } from "react";
import Timer from "./playcomponents/Timer";
import Trivia from "./playcomponents/Trivia";

import { ques } from '../../questions.js'

function App() {
    const [username, setUsername] = useState(null);
    const [timeOut, setTimeOut] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [checkArray, setCheckArray] = useState(new Array(ques.length).fill(0));

    const handleNextButton = () => {
        const temp = [...checkArray];
        temp[questionNumber - 1] = 1;
        setCheckArray(temp);
        setQuestionNumber(questionNumber + 1);
    }

    return (
        <div className="h-[100vh] flex">
            <div className="border-2 border-white w-[75vw]">
                <div className="w-full flex flex-col h-[100vh]">
                    <div className="h-[10vh] flex justify-between">
                        <div className="w-[70px] h-[70px] flex items-center justify-center m-5 text-2xl border-4 text-black font-medium border-black rounded-full">
                            <Timer
                                setTimeOut={setTimeOut}
                                questionNumber={questionNumber}
                            />
                        </div>
                        <button className="border-2 h-12 w-18 m-7 bg-red-500 hover:bg-red-400 border-black px-5 py-2 rounded">Submit</button>
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
                        />
                    </div>
                    <div className="flex justify-end h-[15vh]">
                        <button onClick={handleNextButton} className="border-2 bg-green-500 h-fit mr-10 hover:bg-green-400 border-black w-fit px-6 py-2 rounded">Skip</button>
                    </div>
                </div>
            </div>
            <div className="border-2 w-[25vw] flex items-start">
                <div className=" flex flex-wrap items-start justify-start">
                    {
                        ques.map((curr, id) => {
                            if (checkArray[curr.id - 1] === 2) {
                                return <div key={id} className="border-2 w-[10px] h-[10px] rounded-full flex justify-center m-2 items-center p-5 bg-green-100">{curr.id}</div>
                            }
                            else if (questionNumber === curr.id) {
                                return <div key={id} className="border-2 w-[10px] h-[10px] rounded-full flex justify-center m-2 items-center p-5 bg-yellow-500">{curr.id}</div>
                            }
                            else if (checkArray[curr.id - 1] === 1) {
                                return <div key={id} className="border-2 w-[10px] h-[10px] rounded-full flex justify-center m-2 items-center p-5 bg-black/30">{curr.id}</div>
                            }
                            else {

                                return <div key={id} className="border-2 w-[10px] h-[10px] rounded-full flex justify-center m-2 items-center p-5">{curr.id}</div>
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
