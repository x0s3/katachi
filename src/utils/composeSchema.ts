const composeSchema = <R, F extends (a: R, ...b: any) => R>(
  fn1: (a: R) => R,
  ...fns: Array<(a: R) => R>
) => fns.reduce((prevFn, nextFn) => (value) => prevFn(nextFn(value)), fn1) as F;

export { composeSchema };
