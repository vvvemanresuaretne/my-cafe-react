import React, { useState } from 'react';
import css from '../App/App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo.tsx';
import { Votes, VoteType } from '../../votes.ts';
import VoteStats from '../VoteStats/VoteStats.tsx'; 

interface VoteOptionsProps {
  onVote: (option: 'Good' | 'Neutral' | 'Bad') => void;
  onReset: () => void;
  canReset: boolean;
}

const VoteOptions: React.FC<VoteOptionsProps> = ({ onVote, onReset, canReset }) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote('Good')}>Good</button>
<button className={css.button} onClick={() => onVote('Neutral')}>Neutral</button>
<button className={css.button} onClick={() => onVote('Bad')}>Bad</button>


      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

const App = () => {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  const canReset = totalVotes > 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={canReset} />
      <VoteStats
        votes={votes}
        totalVotes={totalVotes}
        positiveRate={positiveRate}
      />
    </div>
  );
};

export default App;








