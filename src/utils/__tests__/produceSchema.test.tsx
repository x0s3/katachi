import { screen } from '@testing-library/react';
import { produceSchema } from '../produceSchema';
import { renderSchema } from '../renderSchema';
import { schema } from '../../__mocks__/schema';
import { renderWithKatachi } from '../../__mocks__/renderWithKatachi';
import type { Schema } from '../../types';

const renderForm = (schema: Schema) =>
  renderWithKatachi((renderSchema(schema) as unknown) as React.ReactElement);

describe('insertSection', () => {
  describe('when schema is vaild', () => {
    it('returns a new schema with that section', () => {
      const customSchema = produceSchema(schema, (draftSchema) => {
        draftSchema.sections.push({
          id: 'section-2-id',
          title: 'Section 2 Title',
          testId: 'section-2-id',
          childrens: [
            {
              children: <div data-testid="section-2-children" />,
            },
          ],
        });
      });

      renderForm(customSchema);

      expect(screen.getByTestId('section-2-id')).toBeInTheDocument();
    });
  });
});
