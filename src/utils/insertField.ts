import { Schema, Section, Field } from '../types';

type InsertFieldProps = {
  field: Field;
  sectionId: string;
  position: number;
};

function insertField({ sectionId, field, position }: InsertFieldProps) {
  return ({ sections }: Schema) => ({
    sections: sections.reduce((prev, current) => {
      if (current.id === sectionId) {
        prev.push({
          ...current,
          childrens: [
            ...current.childrens.slice(0, position),
            field,
            ...current.childrens.slice(position),
          ],
        });
      } else {
        prev.push(current);
      }

      return prev;
    }, [] as Section[]),
  });
}

export { insertField };
