import React from 'react';

import utils from '../services/math-utils';

const DisplayStars = props => (
    <>
        { utils.range(1, props.count).map(starId =>
            <div key={starId} className="star" />
        )}
    </>
);

export default DisplayStars;