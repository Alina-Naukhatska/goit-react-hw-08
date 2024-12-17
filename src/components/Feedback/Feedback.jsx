import React from 'react';
import styles from './Feedback.module.css';

const Feedback = ({ stats, total, positive }) => (
    <div className={styles.feedback}>
        <p>Good: {stats.good}</p>
        <p>Neutral: {stats.neutral}</p>
        <p>Bad: {stats.bad}</p>
        <p>Total: {total}</p>
        <p>Positive: {positive}%</p>
    </div>
);

export default Feedback;