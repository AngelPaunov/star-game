const PlayAgainButton = props => (
    <div className="game-done">
        <div className="game-result"
            style={{ color: props.gameStatus === 'won' ? 'green' : 'red' }}>
            {props.gameStatus === 'won' ? 'Win' : 'Game over'}
        </div>
        <button onClick={props.onClick}>Play Again</button>
    </div>
);

export default PlayAgainButton;