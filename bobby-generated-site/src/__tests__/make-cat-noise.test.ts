import { makeCatNoise } from '../make-cat-noise';

describe('make-cat-noise', () => {
  it.each([
    ['mousse', '...'],
    ['molly', 'meow'],
    ['oscar', 'MOWWWW']
  ])('When called with %s returns %s', (cat, expectation) => {
    expect(makeCatNoise(cat)).toEqual(expectation);
  });

  it('throws error when other sent', () => {
    expect(
      // Need to pass this in as a function, otherwise the
      //   function will be executed and throw on the main
      //   thread.
      () => makeCatNoise('koda')
    ).toThrow();
  });
});
