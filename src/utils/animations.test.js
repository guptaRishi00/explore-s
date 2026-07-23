import { prefersReducedMotion } from './animations';

describe('prefersReducedMotion', () => {
  const setMatch = (matches) => {
    window.matchMedia = jest.fn().mockImplementation((q) => ({
      matches, media: q, addEventListener: () => {}, removeEventListener: () => {},
    }));
  };

  test('returns true when reduce is preferred', () => {
    setMatch(true);
    expect(prefersReducedMotion()).toBe(true);
  });

  test('returns false when no preference', () => {
    setMatch(false);
    expect(prefersReducedMotion()).toBe(false);
  });
});
