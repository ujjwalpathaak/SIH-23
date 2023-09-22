import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import answer from '../../assets/img/answer.png';
import fiftyFifty from '../../assets/img/fiftyFifty.PNG';
import hints from '../../assets/img/hints.PNG';
import options from '../../assets/img/options.PNG';

import rules from "../../assets/img/rules.png"

const QuizInstructions = () => (
    <div className="bg-cover bg-center flex items-end h-screen w-full" style={{ backgroundImage: `url(${rules})` }}>
        <div className='w-full flex justify-end h-20 items-center'>
            <Link to="/play/quiz" class="z-10 duration-150 relative bg-orange-400 rounded-full hover:bg-white-500 text-white font-semibold hover:text-orange-400 py-2 mb-5 mr-24 px-12 border-2 border-white-500 hover:border-orange-400 hover:bg-white">
                Start
            </Link></div>

    </div>
);

export default QuizInstructions;