import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "../../../../common/Loader";

afterEach(() => {
    cleanup();
});

test("Loader component test", () => {
    render(<Loader />);

    let loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
});