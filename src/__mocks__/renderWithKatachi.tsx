import { render } from '@testing-library/react';
import { KatachiFormProvider, KatachiProps } from '../contexts';

const renderDefaultInput = ({ name, inputTitle, testId, value }: any) => (
  <div>
    <label htmlFor={name}>{inputTitle}</label>
    <input name={name} id={name} data-testid={testId} defaultValue={value} />
  </div>
);
const renderDefaultSection = ({ testId, title, children }: any) => (
  <div data-testid={testId || title}>
    <h3>{title}</h3>
    {children}
  </div>
);

const Wrapper: React.FC<KatachiProps> = ({
  children,
  renderInput = renderDefaultInput,
  renderSection = renderDefaultSection,
}) => (
  <KatachiFormProvider renderInput={renderInput} renderSection={renderSection}>
    {children}
  </KatachiFormProvider>
);

export const renderWithKatachi = (component: any) =>
  // @ts-ignore
  render(component, { wrapper: Wrapper });
