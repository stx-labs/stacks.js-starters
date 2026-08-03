import { render, screen } from "@testing-library/react";
import Intro from "./Intro";

// Note: CRA's Jest 27 setup cannot transform `@stacks/connect`'s ESM output,
// so this smoke test renders a component that doesn't import it.
test("renders stacks.js docs link", () => {
  render(<Intro />);
  const element = screen.getByText(/stacks\.js docs/i);
  expect(element).toBeInTheDocument();
});
