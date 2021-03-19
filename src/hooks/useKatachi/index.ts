import { useContext } from 'react';
import { KatachiContext } from '../../contexts/KatachiProvider';

export const useKatachi = () => {
  const ctx = useContext(KatachiContext);

  if (!ctx) {
    throw new Error(
      'You need a KatachiContextProvider wrapping the current tree in order to access this context'
    );
  }

  return ctx;
};
