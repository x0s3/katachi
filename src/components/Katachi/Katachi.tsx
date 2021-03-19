import { FormProvider, useForm } from 'react-hook-form';
import { KatachiFormProvider } from '../../contexts';
import type { FieldValues } from 'react-hook-form';

export interface KatachiFormProps {
  formAutoComplete?: 'on' | 'off';
  formProps?: Parameters<typeof useForm>[0];
  onSubmit: (fields: FieldValues) => void;
  renderInput?: any;
  renderSection?: any;
}

export const Katachi: React.FC<KatachiFormProps> = ({
  children,
  formAutoComplete = 'off',
  formProps = {},
  onSubmit,
  renderInput,
  renderSection,
}) => {
  const formMethods = useForm({ ...formProps });

  const handleOnSubmit = (data: FieldValues) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...formMethods}>
      <form
        autoComplete={formAutoComplete}
        onSubmit={formMethods.handleSubmit(handleOnSubmit)}
      >
        <KatachiFormProvider
          renderInput={renderInput}
          renderSection={renderSection}
        >
          {children}
        </KatachiFormProvider>
      </form>
    </FormProvider>
  );
};
