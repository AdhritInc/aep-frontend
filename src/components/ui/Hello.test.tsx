import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Hello from "./hello";

describe("Hello Component", () => {
  it("renders the heading", () => {
    render(<Hello />);

    expect(
      screen.getByRole("heading", { name: /hello aep/i })
    ).toBeInTheDocument();
  });
});