import React from 'react';
import styles from './Options.module.css';

const Options = ({ onLeaveFeedback, onReset, showReset }) => (
    <div className={styles.options}>
        <button onClick={() => onLeaveFeedback('good')}>Good</button>
        <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
        <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
        {showReset && <button onClick={onReset}>Reset</button>}
    </div>
);


export default Options;