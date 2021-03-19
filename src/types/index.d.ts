type ID = string;
type Title = string;

type Common = {
  id: ID;
  title: Title;
};

export type Field = Partial<Common> & {
  children: React.ReactNode;
};

export type Section = Common & {
  childrens: Field[];
  testId?: string;
};

export type Sections = {
  sections: Section[];
};

export type Schema = Sections;
