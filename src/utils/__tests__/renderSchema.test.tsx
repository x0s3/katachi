import { screen } from '@testing-library/react';
import { renderSchema } from '../renderSchema';
import { Schema } from '../../types';
import { renderWithKatachi } from '../../__mocks__/renderWithKatachi';

// @ts-ignore
const renderTree = (schema: Schema) => renderWithKatachi(renderSchema(schema));

describe('renderSchema', () => {
  describe('when schema is valid', () => {
    it('returns a React.Node tree with the form generated', () => {
      renderTree({
        sections: [
          {
            id: 'section_id',
            testId: 'section_test_id',
            title: 'Section Test',
            childrens: [
              {
                id: 'children_id',
                children: <div data-testid="children_data_id" />,
              },
            ],
          },
        ],
      });

      expect(screen.getByTestId('children_data_id')).toBeInTheDocument();
    });
  });

  describe('when schema is not valid', () => {
    it('throws an error', () => {
      // @ts-ignore
      expect(() => renderTree({ randomKey: [] })).toThrow(
        'Schema is not valid, it must contains `sections`'
      );
    });
  });
});
