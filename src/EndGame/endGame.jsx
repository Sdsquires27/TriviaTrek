import React from 'react';

export function EndGame(){
    const [score, setScore] = React.useState();
    const [maxScore, setMaxScore] = React.useState();
    const [correct, setCorrect] = React.useState();
    const [rank, setRank] = React.useState("Default");

    React.useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);

        setScore(parseInt(urlParams.get('score')));
        setMaxScore(parseInt(urlParams.get('total')));
        setCorrect(parseInt(urlParams.get('correct')));

        const curScore = parseInt(urlParams.get('score'));
        if (curScore === 0) setRank("Absolute Fool");
        else if (curScore < 100) setRank("Scrub");
        else if (curScore < 200) setRank("Alright I Guess");
        else if (curScore <300) setRank("Smarty");
        else if (curScore < 400) setRank("Super Duper Smarty");
        else setRank("True Winner");
    }, []);

    return(
        <div>
            <p>You got a score of {score}, with a total of {correct} of {maxScore} correct--that's {(correct/maxScore) * 100}%! You're a <b>{rank}</b>! Try again for a better score!</p>
            <button className="btn btn-dark" type="button" onClick={() => navigate(`/`)}>Return</button>
        </div>
    )
}