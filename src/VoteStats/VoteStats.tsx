import React from 'react';
import styles from '../VoteStats/VoteStats.module.css';

interface VoteStatsProps {
  votes: {
    good: number;
    neutral: number;
    bad: number;
  };
  totalVotes: number;
  positiveRate: number;
}

const VoteStats: React.FC<VoteStatsProps> = ({ votes, totalVotes, positiveRate }) => {
  if (totalVotes === 0) {
    return <p className={styles.message}>No feedback given</p>;
  }

  return (
    <div className={styles.container}>
      <p className={styles.stat}>Good: <strong>{votes.good}</strong></p>
      <p className={styles.stat}>Neutral: <strong>{votes.neutral}</strong></p>
      <p className={styles.stat}>Bad: <strong>{votes.bad}</strong></p>
      <p className={styles.stat}>Total: <strong>{totalVotes}</strong></p>
      <p className={styles.stat}>Positive: <strong>{positiveRate}%</strong></p>
    </div>
  );
};

export default VoteStats;
