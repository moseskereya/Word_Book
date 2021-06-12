import React from 'react';
import spinner from './images/spinner.gif';

// eslint-disable-next-line
export default () => {
    return (
        <div className="spinner">
            <img
                src={spinner}
                alt="Loading..."
            />
        </div>
    );
};