import { describe, expect, it } from "vitest";

describe("App Component", () => {
  it("should pass", () => {
    expect(25).toBe(25);
  });

  it("should fail", () => {
    expect(25).toBe(24);
  });
});
