import type { Schema, Section } from '../types';

/**
 * Given a section id, it will remove it from the current schema
 *
 * @param param0
 * @returns schema
 */
function removeSection(sectionId: string) {
  return ({ sections }: Schema) => ({
    sections: sections.reduce((prev, current) => {
      const sectionExists = current.id === sectionId;

      if (!sectionExists) {
        prev.push(current);
      }

      return prev;
    }, [] as Section[]),
  });
}

export { removeSection };
