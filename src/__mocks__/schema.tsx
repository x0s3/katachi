import { Schema } from '../types';

export const schema: Schema = {
  sections: [
    {
      testId: 'section-1-test',
      title: 'Section 1',
      id: 'section-1-id',
      childrens: [
        {
          children: <div data-testid="children-1-section-1" />,
          id: 'children-1-section-1',
        },
      ],
    },
  ],
};
