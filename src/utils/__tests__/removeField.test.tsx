import { screen } from '@testing-library/react';
import { removeField } from '../removeField';
import { renderSchema } from '../renderSchema';
import { schema } from '../../__mocks__/schema';
import { renderWithKatachi } from '../../__mocks__/renderWithKatachi';
import type { Schema } from '../../types';

const renderForm = (schema: Schema) =>
  renderWithKatachi((renderSchema(schema) as unknown) as React.ReactElement);

describe('removeField', () => {
  describe('when schema is vaild', () => {
    it('returns a new schema without that field', () => {
      const customSchema = removeField('children-1-section-1');

      renderForm(customSchema(schema));

      expect(
        screen.queryByTestId('children-1-section-1')
      ).not.toBeInTheDocument();
    });
  });
});
