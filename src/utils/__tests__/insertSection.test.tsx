import { screen } from '@testing-library/react';
import { insertSection } from '../insertSection';
import { renderSchema } from '../renderSchema';
import { schema } from '../../__mocks__/schema';
import { renderWithKatachi } from '../../__mocks__/renderWithKatachi';
import type { Schema } from '../../types';

const renderForm = (schema: Schema) =>
  renderWithKatachi((renderSchema(schema) as unknown) as React.ReactElement);

describe('insertSection', () => {
  describe('when schema is vaild', () => {
    it('returns a new schema with that section', () => {
      const customSchema = insertSection({
        position: 1,
        section: {
          id: 'section-2-id',
          title: 'Section 2 Title',
          childrens: [
            {
              children: <div data-testid="section-2-children" />,
            },
          ],
          testId: 'section-2-id',
        },
      });

      renderForm(customSchema(schema));

      expect(screen.getByTestId('section-2-id')).toBeInTheDocument();
    });
  });
});
