import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import TanksView from "../TanksView";

afterEach(() => {
    cleanup();
});

test("TanksView component test", () => {
    render(<TanksView />);

    let container = screen.getByTestId("tank-view");
    expect(container).toBeInTheDocument();
});