import { Fragment } from 'react';
import { SectionComponent as Section } from '../components/Section';
import type { Schema } from '../types';

type FormTree = React.ReactNode[];

// TODO improve schema validation
function isSchemaValid(schema: Schema) {
  if (!schema?.sections) {
    throw new Error('Schema is not valid, it must contains `sections`');
  }
}

/**
 * Given a schema, it will generate the render tree of the final form
 *
 * @param {Schema} schema
 * @returns React.ReactNode[]
 */
function renderSchema(schema: Schema): FormTree {
  isSchemaValid(schema);

  const formTree: FormTree = [];
  const sch = Object.entries(schema);

  for (const [, sections] of sch) {
    sections.forEach(({ title: sectionTitle, testId, childrens }, index) => {
      formTree.push(
        <Section
          key={`${sectionTitle}-${index}`}
          testId={testId}
          title={sectionTitle}
        >
          {childrens.map(({ children, id }, index) => (
            <Fragment key={`${id}-${index}`}>{children}</Fragment>
          ))}
        </Section>
      );
    });
  }

  return formTree;
}

export { renderSchema };
