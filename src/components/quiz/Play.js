import "./play.css";
import { useEffect, useMemo, useState } from "react";
import Timer from "./playcomponents/Timer";
import Trivia from "./playcomponents/Trivia";

import { ques } from '../../questions.js'

function App() {
    const [username, setUsername] = useState(null);
    const [timeOut, setTimeOut] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [earned, setEarned] = useState("$ 0");

    return (
        <div className="h-[100vh] flex">
            <div className="border-2 border-white w-[75vw]">
                <div className="w-full flex flex-col h-[100vh]">
                    <div className="h-[10vh]">
                        <div className="w-[70px] h-[70px] flex items-center justify-center m-5 text-2xl border-4 text-black font-medium border-black rounded-full">
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
                        />
                    </div>
                </div>
            </div>
            <div className="border-2 w-[25vw] flex items-start">
                <div className=" flex flex-wrap items-start justify-start">
                    {
                        ques.map((curr) => {
                            if (questionNumber === curr.id) {
                                return <div className="border-2 w-[10px] h-[10px] rounded-full flex justify-center m-2 items-center p-5 bg-green-500">{curr.id}</div>
                            }
                            else {

                                return <div className="border-2 w-[10px] h-[10px] rounded-full flex justify-center m-2 items-center p-5">{curr.id}</div>
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
