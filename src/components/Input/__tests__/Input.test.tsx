import { screen } from '@testing-library/react';
import { get } from 'react-hook-form';
import { Input } from '../Input';
import type { InputProps } from '../Input';
import { renderWithKatachi } from '../../../__mocks__/renderWithKatachi';

jest.mock('react-hook-form', () => ({
  useFormContext: () => ({
    register: jest.fn(),
    formState: {},
  }),
  get: jest.fn(),
}));

const renderSection = (props: InputProps) =>
  renderWithKatachi(<Input {...props} />);

describe('Input', () => {
  describe('when input has no error', () => {
    beforeAll(() => {
      (get as jest.Mock).mockReturnValue(null);
    });

    it('renders with children and title', () => {
      renderSection({
        inputTitle: 'Input title',
        testId: 'input-test-id',
        name: 'magic-input',
      });

      expect(screen.getByText('Input title')).toBeInTheDocument();
      expect(screen.getByTestId('input-test-id')).toBeInTheDocument();
    });
  });
});
