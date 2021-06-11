import React from 'react';

import useGameState from '../hooks/useGameState';

import DisplayStars from './DisplayStars';
import ButtonNumber from './ButtonNumber';
import PlayAgain from './PlayAgainButtons';

import utils from '../services/math-utils';

const Game = props => {
  const {
    stars,
    availableNumbers,
    candidateNumbers,
    remainingSeconds,
    gameStatus,
    setGameState
  } = useGameState(props.maxStarsCount, props.timerSeconds);

  const areCandidateNumbersWrong = utils.sum(candidateNumbers) > stars;

  const getButtonNumberStatus = (number) => {
    if (!availableNumbers.includes(number)) {
      return 'used';
    }

    if (candidateNumbers.includes(number)) {
      return areCandidateNumbersWrong ? 'wrong' : 'candidate';
    }

    return 'available';
  };

  const onButtonNumberClick = (number, status) => {
    if (status === 'used' || gameStatus !== 'running') {
      return;
    }

    const newCandidateNumbers = status === 'available' ? [...candidateNumbers, number] : candidateNumbers.filter(candidateNumber => candidateNumber !== number);

    setGameState(newCandidateNumbers);
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {
            gameStatus !== 'running' ? (
              <PlayAgain
                gameStatus={gameStatus}
                resetGame={props.resetGame}
                resetLevel={props.resetLevel}
              />
            ) : (
              <DisplayStars
                count={stars}
              />
            )}
        </div>
        <div className="right">
          {
            utils.range(1, props.maxStarsCount).map(number =>
              <ButtonNumber
                key={number}
                number={number}
                status={getButtonNumberStatus(number)}
                onClick={onButtonNumberClick}
              />
            )}
        </div>
      </div>
      <div className="timer">Time Remaining: {remainingSeconds}</div>
    </div>
  );
};

export default Game;