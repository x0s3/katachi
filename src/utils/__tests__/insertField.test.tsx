import { screen } from '@testing-library/react';
import { insertField } from '../insertField';
import { renderSchema } from '../renderSchema';
import { schema } from '../../__mocks__/schema';
import { renderWithKatachi } from '../../__mocks__/renderWithKatachi';
import type { Schema } from '../../types';

const renderForm = (schema: Schema) =>
  renderWithKatachi((renderSchema(schema) as unknown) as React.ReactElement);

describe('insertField', () => {
  describe('when schema is vaild', () => {
    it('returns a new schema with that field', () => {
      const customSchema = insertField({
        position: 1,
        field: {
          children: <div data-testid="field-1-id" />,
          id: 'field-1-id',
        },
        sectionId: 'section-1-id',
      });

      renderForm(customSchema(schema));

      expect(screen.getByTestId('field-1-id')).toBeInTheDocument();
    });
  });
});
