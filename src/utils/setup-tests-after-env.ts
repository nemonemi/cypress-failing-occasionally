import '@testing-library/jest-dom';
import { vi } from 'vitest';

const { location } = window;
beforeAll(() => {
  // Mock the window.location's assign and replace methods
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  delete window.location;
  window.location = { ...location, assign: vi.fn() };
});

afterAll(() => {
  // restore the window.location.assign method
  window.location = location;
});
