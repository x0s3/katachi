import { useFormContext, get } from 'react-hook-form';
import { useKatachi } from '../../hooks';

export type InputProps = {
  inputTitle: string;
  name: string;
  type?: HTMLInputElement['type'];
  value?: HTMLInputElement['value'];
  testId?: string;
};

export function Input({ inputTitle, name, testId, value, type }: InputProps) {
  const { renderInput } = useKatachi();
  const { register, formState } = useFormContext();
  const error = get(formState.errors, name);

  return renderInput({
    inputTitle,
    name,
    testId,
    type,
    value,
    error,
    register: { ...register },
  });
}
