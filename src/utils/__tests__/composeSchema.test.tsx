import { screen } from '@testing-library/react';
import { renderSchema } from '../renderSchema';
import { composeSchema } from '../composeSchema';
import { removeSection } from '../removeSection';
import { insertSection } from '../insertSection';
import { schema } from '../../__mocks__/schema';
import { renderWithKatachi } from '../../__mocks__/renderWithKatachi';
import type { Schema } from '../../types';

const renderForm = (schema: Schema) =>
  renderWithKatachi((renderSchema(schema) as unknown) as React.ReactElement);

describe('composeSchema', () => {
  describe('when adding a section', () => {
    it('returns a custom schema with that section', () => {
      const customSchema = composeSchema(
        insertSection({
          position: 0,
          section: {
            testId: 'section-2',
            id: 'section-2',
            title: 'Section 2',
            childrens: [{ children: <div data-testid="children-section-2" /> }],
          },
        })
      )(schema);

      renderForm(customSchema);

      expect(screen.queryByTestId('children-section-2')).toBeInTheDocument();
      expect(screen.queryByTestId('section-2')).toBeInTheDocument();
      expect(screen.queryByTestId('section-1-test')).toBeInTheDocument();
    });
  });

  describe('when removing a section', () => {
    it('returns a custom schema without that section', () => {
      const customSchema = composeSchema(removeSection('section-1-id'))(schema);

      renderForm(customSchema);

      expect(screen.queryByTestId('section-1-test')).not.toBeInTheDocument();
    });
  });
});
