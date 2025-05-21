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
      <p className={styles.stat}>good: <strong>{votes.good}</strong></p>
      <p className={styles.stat}>neutral: <strong>{votes.neutral}</strong></p>
      <p className={styles.stat}>bad: <strong>{votes.bad}</strong></p>
      <p className={styles.stat}>total: <strong>{totalVotes}</strong></p>
      <p className={styles.stat}>positive: <strong>{positiveRate}%</strong></p>
    </div>
  );
};

export default VoteStats;
