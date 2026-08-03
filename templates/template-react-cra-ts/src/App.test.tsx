import { render, screen } from "@testing-library/react";

// `@stacks/connect` v8 ships as ESM, which Create React App's Jest setup does not
// transform. Mocking it keeps this smoke test running without extra Jest config.
jest.mock("@stacks/connect", () => ({
  connect: jest.fn(),
  disconnect: jest.fn(),
  isConnected: jest.fn(() => false),
  getLocalStorage: jest.fn(() => null),
  request: jest.fn(),
}));

import App from "./App";

test("renders connect wallet button", () => {
  render(<App />);
  expect(screen.getByText(/connect wallet/i)).toBeInTheDocument();
});
