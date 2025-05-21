import React from 'react';
import css from '../VoteOptions/VoteOptions.module.css';

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

export default VoteOptions;