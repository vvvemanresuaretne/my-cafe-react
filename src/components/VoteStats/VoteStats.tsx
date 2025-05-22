import React from 'react';
import styles from '../VoteStats/VoteStats.module.css';
import { Votes } from '../../types/votes';

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

const VoteStats: React.FC<VoteStatsProps> = ({ votes, totalVotes, positiveRate }) => {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>Good: <strong>{votes.good}</strong></p>
      <p className={styles.stat}>Neutral: <strong>{votes.neutral}</strong></p>
      <p className={styles.stat}>Bad: <strong>{votes.bad}</strong></p>
      <p className={styles.stat}>Total: <strong>{totalVotes}</strong></p>
      <p className={styles.stat}>Positive: <strong>{totalVotes === 0 ? '0%' : `${positiveRate}%`}</strong></p>
    </div>
  );
};

export default VoteStats;

