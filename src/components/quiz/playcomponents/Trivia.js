import { useEffect, useState } from "react";

export default function Trivia({
    data,
    questionNumber,
    setQuestionNumber,
    setTimeOut,
    timeOut
}) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState();

    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };

    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName(question.answer === a ? "bg-green-500 w-[30%] p-[10px] m-6 text-center border-2 border-black/30 rounded-[15px] " : "bg-red-500 w-[30%] p-[10px] m-6 text-center border-2 border-black/30 rounded-[15px] ");

        delay(1000, () => {
            if (question.answer === a) {
                delay(1000, () => {
                    setQuestionNumber(questionNumber + 1);
                    setSelectedAnswer(null);
                });
            } else {
                delay(1000, () => {
                    setQuestionNumber(questionNumber + 1);
                    setSelectedAnswer(null);
                });
            }
        })
    };
    return (
        <div className="flex w-[80%] flex-col items-center justify-center border-4 border-black/30 rounded-xl">
            <div className="w-[80%] text-center p-[15px] m-12 rounded-[10px] border-4 ">{question?.question}</div>
            <div className="w-full flex justify-center items-around flex-wrap">
                {question?.options.map((currOption) => (
                    <div
                        className={selectedAnswer === currOption ? className : "w-[30%] p-[10px] m-6 text-center border-2 border-black/30 hover:bg-black/5 rounded-[15px] "}
                        onClick={() => handleClick(currOption)}
                    >
                        {currOption}
                    </div>
                ))}
            </div>
        </div>
    );
}
