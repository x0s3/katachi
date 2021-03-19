import { screen } from '@testing-library/react';
import { renderWithKatachi } from '../../../__mocks__/renderWithKatachi';
import { SectionComponent } from '../Section';

type Props = React.ComponentProps<typeof SectionComponent>;

const renderSection = (props: Props) =>
  renderWithKatachi(<SectionComponent {...props} />);

describe('Section', () => {
  it('renders with children and title', () => {
    renderSection({
      title: 'Section',
      testId: 'section-test-id',
      children: <div data-testid="children-id" />,
    });

    expect(screen.getByText('Section')).toBeInTheDocument();
    expect(screen.getByTestId('section-test-id')).toBeInTheDocument();
    expect(screen.getByTestId('children-id')).toBeInTheDocument();
  });
});
