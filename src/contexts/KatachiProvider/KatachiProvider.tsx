import { createContext } from 'react';
import type { RegisterOptions, FieldError } from 'react-hook-form';
import type { InputProps, SectionProps } from '../../components';

export type RenderInputProps = InputProps & {
  register: RegisterOptions;
  error: FieldError;
};

export interface KatachiProps {
  renderInput: (props: RenderInputProps) => JSX.Element;
  renderSection: (props: SectionProps) => JSX.Element;
}

export const KatachiContext = createContext<KatachiProps>(undefined!);

export const KatachiFormProvider: React.FC<KatachiProps> = ({
  children,
  ...props
}) => <KatachiContext.Provider value={{ ...props }} children={children} />;
