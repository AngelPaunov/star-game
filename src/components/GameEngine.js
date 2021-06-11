import React, { useState } from 'react';

import Game from './Game';
import SelectLevelButton from './SelectLevelButton';
import utils from '../services/math-utils';

const GameEngine = () => {
  const [gameId, setGameId] = useState(0);
  const [gameLevel, setGameLevel] = useState(0);
  const [maxStarsCount, setMaxStarsCount] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const onLevelSelect = (levelNumber) => {
    setMaxStarsCount(levelNumber * 2);
    setTimerSeconds(levelNumber * 8);
    setGameLevel(levelNumber);
  };

  return (
    <div className="game-levels">
      { gameLevel === 0 ? (
        <div className="level-buttons">
          {utils.range(1, 20).map(levelNumber =>
            <SelectLevelButton
              key={levelNumber}
              levelNumber={levelNumber}
              onClick={() => onLevelSelect(levelNumber)} />
          )}
        </div>
      ) : (
        <div>
          <h2 className="current-game-level"> Level {gameLevel}</h2>
          <Game
            key={gameId}
            maxStarsCount={maxStarsCount}
            timerSeconds={timerSeconds}
            resetGame={() => setGameId(gameId + 1)}
            resetLevel={() => setGameLevel(0)} />
        </div>
      )}
    </div>
  )
};

export default GameEngine;