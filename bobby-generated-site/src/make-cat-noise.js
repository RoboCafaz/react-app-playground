/**
 * For the input cat, returns the noise that
 *   they would likely make if you approached
 *   them.
 *
 * @param {*} cat - name of cat you want to harass
 * @returns string containing the cat noise.
 */
export const makeCatNoise = (cat) => {
  switch (cat) {
    case "molly":
      return "meow";
    case "mousse":
      return "...";
    case "oscar":
      return "MOWWWW";
    default:
      throw new Error("Bark");
  }
};
