import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Welcome } from './Welcome/welcome';
import { Game } from './Game/game';
import { EndGame } from './EndGame/endGame';
import './app.css';

export default function App() 
{

    return(
    <BrowserRouter>
        <div className="body">
            <header>
                <h1>Trivia Trek</h1>
            </header>
            <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/game' element={<Game />} />
                <Route path='/end-game' element={<EndGame />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <footer>
                <p>Author Name: Seth Squires</p>
                <a className="nav-link active" id="github-link" href="https://github.com/Sdsquires27/TriviaTrek">View GitHub</a>
            </footer>
        </div>
  </BrowserRouter>
  );
}
function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}