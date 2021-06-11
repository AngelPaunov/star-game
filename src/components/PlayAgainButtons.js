const PlayAgain = props => (
    <div className="game-done">
        <div className="game-result"
            style={{ color: props.gameStatus === 'won' ? 'green' : 'red' }}>
            {props.gameStatus === 'won' ? 'Win' : 'Game over'}
            <div>
                <button className="play-again-button" onClick={props.resetGame}><span>Play Again </span></button>
                <button className="play-again-button" onClick={props.resetLevel}><span>Choose Another Level </span></button>
            </div>
        </div>
    </div>
);

export default PlayAgain;