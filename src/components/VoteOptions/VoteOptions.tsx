import React from 'react';
import css from '../VoteOptions/VoteOptions.module.css';
import type { VoteType } from '../../types/votes';


interface VoteOptionsProps {
  onVote: (option: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

const VoteOptions: React.FC<VoteOptionsProps> = ({ onVote, onReset, canReset }) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote('good')}>good</button>
      <button className={css.button} onClick={() => onVote('neutral')}>neutral</button>
      <button className={css.button} onClick={() => onVote('bad')}>bad</button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default VoteOptions;
