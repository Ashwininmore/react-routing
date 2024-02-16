import Aboutus from "./Aboutus";
import { render, screen } from "@testing-library/react";

describe("App", () => {
it("renders import component", () => {
render(<Aboutus />);
expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
});
it("true is truthy", () => {
expect(true).toBe(true);
});
it("false is falsy", () => {
expect(false).toBe(false);
});
});