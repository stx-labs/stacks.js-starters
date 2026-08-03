import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders stacks.js docs link", () => {
  render(<App />);
  const element = screen.getByText(/stacks\.js docs/i);
  expect(element).toBeInTheDocument();
});
