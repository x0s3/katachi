---
id: using-katachi
title: How to use it
slug: /using-katachi
---

After installing the necessary dependencies for Katachi to work, using this lib.
is as easy as creating a schema of your form and Katachi will do the rest 🏗

```tsx
import { Katachi, renderSchema } from '@x0s3/katachi';
import type { Schema, KatachiFormProps } from '@x0s3/katachi';

const schema: Schema = {
  sections: [
    {
      id: 'section-1',
      title: 'Section One',
      childrens: [
        {
          id: 'user_name',
          children: <UserName />,
        },
        {
          id: 'user_age',
          children: <UserAge />,
        },
      ],
    },
  ],
};

const App = (props: KatachiFormProps) => (
  <Katachi {...props}>{renderSchema(schema)}</Katachi>
);
```
