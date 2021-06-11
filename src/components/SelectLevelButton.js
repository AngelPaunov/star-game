import React from 'react';

const SelectLevelButton = props => (
    <button
        onClick={props.onClick}>
        Level {props.levelNumber}
    </button>
);

export default SelectLevelButton;