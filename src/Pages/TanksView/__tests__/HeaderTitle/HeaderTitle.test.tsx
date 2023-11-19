import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeaderTitle from "../../../../components/HeaderTitle";

afterEach(() => {
    cleanup();
});

test("HeaderTitle component test", () => {
    const mokTitle = "Title"

    render(<HeaderTitle title={mokTitle} />);

    let headerTitle = screen.getByTestId("header-container");
    expect(headerTitle).toBeInTheDocument();
});