import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Hello from "./hello";

describe("Hello Component", () => {
  it("renders the greeting", () => {
    render(<Hello />);

    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});