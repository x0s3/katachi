import { memo } from 'react';
import { useKatachi } from '../../hooks';
import type { Section as S } from '../../types';

export type SectionProps = {
  title: string;
  children: React.ReactNode;
} & Pick<S, 'testId'>;

export const SectionComponent: React.FC<SectionProps> = memo(
  ({ children, title, testId }) => {
    const { renderSection } = useKatachi();

    return renderSection({ title, testId, children });
  }
);
