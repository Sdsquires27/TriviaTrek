import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from "react-bootstrap";
import './welcome.css';

export function Welcome(){
    const [category, setCategory] = React.useState('');
    const [difficulty, setDifficulty] = React.useState('');

    const handleCategoryChange = (event) => 
    {
        setCategory(event.target.value);
    };

    const handleDifficultyChange = (event) => 
    {
        setDifficulty(event.target.value);
    };

    const navigate = useNavigate();

    return(
        <div id="welcome-div">
            <p>Welcome to Trivia Trek!</p>
            <p>This is a small trivia game created by Seth Squires using Open Trivia DB. To play, select a difficulty level and category, then press start game. You will be given a series of questions to answer and a time limit. You will be given a score based on how fast you answer and the difficulty of the question. Try it out by pressing 'Start Game' below!</p>
            <div id="submit-holder">
                <Form.Group controlId="formBasicSelect">
                          <Form.Select
                            value={difficulty} // Controls the component with state
                            onChange={handleDifficultyChange} // Updates the state on change
                            aria-label="Select Difficulty"
                          >
                        <option value="">Choose Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </Form.Select>
                </Form.Group>

                
                <Form.Group controlId="formBasicSelect">
                    <Form.Select
                    value={category} // Controls the component with state
                    onChange={handleCategoryChange} // Updates the state on change
                    aria-label="Select Category"
                    >
                    <option selected>Choose Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="10">Entertainment: Books</option>
                    <option value="11">Entertainment: Music</option>
                    <option value="13">Entertainment: Musicals and Theatre</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="16">Entertainment: Board Games</option>
                    <option value="29">Entertainment: Comics</option>
                    <option value="17">Science and Nature</option>
                    <option value="18">Science: Computers</option>
                    <option value="19">Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Arts</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    </Form.Select>
                </Form.Group>

                <button className="btn btn-dark" type="button" onClick={() => navigate('/game')}>Start Game</button>
            </div>
        </div>
    )
}