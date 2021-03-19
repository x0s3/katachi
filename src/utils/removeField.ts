import type { Schema, Section } from '../types';

/**
 * Given a field id, it will remove it from the current schema
 *
 * @param param0
 * @returns schema
 */
function removeField(fieldId: string) {
  return ({ sections }: Schema) => ({
    sections: sections.reduce((prev, current) => {
      const fieldPosition = current.childrens.findIndex(
        ({ id }) => id === fieldId
      );
      const fieldExists = fieldPosition > -1;

      if (fieldExists) {
        const newSectionFields = {
          ...current,
          childrens: [
            ...current.childrens.slice(0, fieldPosition),
            ...current.childrens.slice(fieldPosition + 1),
          ],
        };
        prev.push(newSectionFields);
      } else {
        prev.push(current);
      }

      return prev;
    }, [] as Section[]),
  });
}

export { removeField };
