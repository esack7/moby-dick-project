const useful = require('../pre_build/usefulChar');

describe('testing usefulChar.js file', () => {
  const nonAlphaChars = [91, 92, 93, 94, 95, 96];
  test('calling useful() by passing in int < 64 should return a false as it is out of bounds', () => {
    expect(useful(64)).toBe(false);
    expect(useful(1)).toBe(false);
    expect(useful(29)).toBe(false);
  });

  test('calling useful() by passing in int > 123 should return a false as it is out of bounds', () => {
    expect(useful(123)).toBe(false);
    expect(useful(224)).toBe(false);
  });

  test('calling useful() by passing in any inbounds int in nonAlphaChars array should return false', () => {
    nonAlphaChars.map(ele => expect(useful(ele)).toBe(false));
  });

  test('calling useful() by passing in int that is inbounds and not found in nonAlphaChars array should return false', () => {
    expect(useful(65)).toBe(true);
    expect(useful(75)).toBe(true);
    expect(useful(90)).toBe(true);
    expect(useful(97)).toBe(true);
    expect(useful(110)).toBe(true);
    expect(useful(122)).toBe(true);
  });
});
