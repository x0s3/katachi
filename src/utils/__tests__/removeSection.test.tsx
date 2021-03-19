import { screen } from '@testing-library/react';
import { removeSection } from '../removeSection';
import { renderSchema } from '../renderSchema';
import { schema } from '../../__mocks__/schema';
import { renderWithKatachi } from '../../__mocks__/renderWithKatachi';
import type { Schema } from '../../types';

const renderForm = (schema: Schema) =>
  renderWithKatachi((renderSchema(schema) as unknown) as React.ReactElement);

describe('removeSection', () => {
  describe('when schema is vaild', () => {
    it('returns a new schema without that section', () => {
      const customSchema = removeSection('section-1-id');

      renderForm(customSchema(schema));

      expect(screen.queryByTestId('section-1-test')).not.toBeInTheDocument();
    });
  });
});
