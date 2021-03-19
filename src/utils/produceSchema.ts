import { produce } from 'immer';
import type { Schema } from '../types';

/**
 * Given a schema and a callback, it will return the new schema with the changes
 *
 * @param schema Schema to modify (immutable changes)
 * @returns modified schema
 */
const produceSchema = <S extends Schema>(schema: S, modifier: (s: S) => void) =>
  produce(schema, modifier);

export { produceSchema };
