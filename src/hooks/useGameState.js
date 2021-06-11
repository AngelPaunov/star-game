import { useState, useEffect } from 'react';
import utils from '../services/math-utils';

const useGameState = (maxStarsCount, timerSeconds) => {
    const [stars, setStars] = useState(utils.random(1, maxStarsCount));
    const [availableNumbers, setAvailableNumbers] = useState(utils.range(1, maxStarsCount));
    const [candidateNumbers, setCandidateNumbers] = useState([]);
    const [remainingSeconds, setRemainingSeconds] = useState(timerSeconds);

    const gameStatus = availableNumbers.length === 0 ? 'won' : (remainingSeconds > 0 && availableNumbers.length > 0 ? 'running' : 'lost');

    useEffect(() => {
        if (gameStatus === 'running') {
            const timerId = setTimeout(() => {
                setRemainingSeconds(remainingSeconds - 1);
            }, 1000);

            return () => clearTimeout(timerId);
        }
    }, [remainingSeconds, gameStatus]);

    const setGameState = (newCandidateNumbers) => {
        if (utils.sum(newCandidateNumbers) === stars) {
            const newAvailableNumbers = availableNumbers.filter(availableNumber => !newCandidateNumbers.includes(availableNumber));

            setStars(utils.randomSumIn(newAvailableNumbers, maxStarsCount));
            setAvailableNumbers(newAvailableNumbers);
            setCandidateNumbers([]);
        } else {
            setCandidateNumbers(newCandidateNumbers);
        }
    };

    return { stars, availableNumbers, candidateNumbers, remainingSeconds, gameStatus, setGameState };
}

export default useGameState;