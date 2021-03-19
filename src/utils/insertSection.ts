import { Schema, Section } from '../types';

type InsertSectionProps = {
  section: Section;
  position: number;
};

/**
 * Given a section, it will add it to the specific position of the schema
 *
 * @param param0
 * @returns schema
 */
function insertSection({ section, position }: InsertSectionProps) {
  return ({ sections }: Schema) => ({
    sections: [
      ...sections.slice(0, position),
      section,
      ...sections.slice(position),
    ],
  });
}

export { insertSection };
