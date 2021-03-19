import { render, screen, fireEvent } from '@testing-library/react';
import { Katachi } from '../Katachi';

type KatachiProps = React.ComponentProps<typeof Katachi>;

const renderForm = (props: KatachiProps) => render(<Katachi {...props} />);

jest.mock('react-hook-form', () => ({
  useForm: () => ({
    handleSubmit: (cb: any) => cb,
  }),
  FormProvider: ({ children }: any) => children,
}));

describe('Katachi form component', () => {
  it('renders children and submit form', () => {
    const onSubmit = jest.fn();

    renderForm({
      onSubmit,
      children: <input type="submit" data-testid="submit-id" />,
    });

    const submitButton = screen.getByTestId('submit-id');

    fireEvent.submit(submitButton);

    expect(onSubmit).toHaveBeenCalled();
  });
});
