---
id: schema-utils
title: Schema utils
---

## Management

### `renderSchema()`

```ts
renderSchema(schema);
```

Given a custom schema, it generates your React form

#### Arguments

- `schema`: Any valid schema that Katachi accepts

### `composeSchema()`

```ts
composeSchema(modifier1, modifier2)(schema);
```

`composeSchema` is a composable function that allows you to generate a new
modified schema without hassle.

:::note 
Since `composeSchema` returns a composable function, it needs to be
invoked two times. The first time with any modifier function, and a second time,
with the schema: `composeSchema(insertField)(schema)`. 
:::

#### Arguments

- `modifierFn`: Any valid modifier function that Katachi provides

- `schema`: Any valid schema

:::info 
You can create your own modifier function as long as you follow the
schema shape 👍
:::

### `produceSchema()`

```ts
produceSchema(schema, (draftSchema) => {});
```

`produceSchema` allows you to work with immutable schema in a more convenient way.

#### Arguments

- `schema`: Any valid schema

- `modifierFn(draftSchema)`: Any valid callback function that you want to provide

:::note
In order to use this util make sure that you have installed `immer` in your project

```
yarn add immer
```

```
npm install immer
```
:::

## Modifiers

### `insertField()`

```ts
insertField(myField);
```

Add a custom field at any position in your schema

#### Arguments

- `[myField]`_(Object)_: Any valid field object that Katachi accepts

  - `[position]`_(Number)_: The position where you want your field to be
    rendered
  - `[sectionId]`_(String)_: The section where you want to insert that field
  - `[field]`_(Object)_: Any valid object that Katachi accepts
    - `[id]`_(String)_: Id of your field that will be managed internally by
      Katachi
    - `[children]`_(React.ReactNode)_: Any React valid component

### `insertSection()`

```ts
insertSection(mySection);
```

Add a custom section at any position in your schema

#### Arguments

- `[mySection]`_(Object)_: Any valid section object that Katachi accepts

  - `[position]`_(Number)_: The position where you want your section to be
    rendered
  - `[section]`_(Object)_: The position where you want your field to be rendered
    - `[id]`_(String)_: Id of your section that will be managed internally by
      Katachi
    - `[title]`_(String)_: The title that your section will render
    - `[childrens]`_(Array)_: Array of React components
      - `[children]`_(React.ReactNode)_: Any React valid component
    - `[testId?]`_(String)_: Helper to search by id in your tests

### `removeField()`

```ts
removeField(fieldId);
```

Remove any field by its ID

#### Arguments

- `[fieldId]`_(String)_: Any valid field id

### `removeSection()`

```ts
removeSection(sectionId);
```

Remove any section by its ID

#### Arguments

- `[sectionId]`_(String)_: Any valid section id

## Example

```tsx
import { renderSchema, composeSchema } from 'katachi';
import { mySchema } from './my-schema';

const customSchema = composeSchema(
  removeSection('section_3'),
  removeField('field_4'),
  insertSection({
    position: 1,
    section: {
      id: 'section-2-id',
      title: 'Section 2 Title',
      childrens: [
        {
          children: <div data-testid="section-2-children" />,
        },
      ],
      testId: 'section-2-id',
    },
  }),
  insertField({
    position: 1,
    sectionId: 'section_1',
    field: {
      children: <input />,
      id: 'field-dynamic',
    },
  })
)(mySchema);

function MyApp() {
  return renderSchema(customSchema);
}
```
