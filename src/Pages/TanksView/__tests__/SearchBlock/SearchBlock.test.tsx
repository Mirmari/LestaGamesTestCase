import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBlock from "../../../../components/common/SearchBlock";

afterEach(() => {
    cleanup();
});

test("SearchBlock component test", () => {
    const mokFn = jest.fn();
    const mokValue = "Lowe";

    render(<SearchBlock value={mokValue} onSearch={mokFn} onChange={mokFn}/>);

    let container = screen.getByTestId("search-container");
    let input = screen.getByTestId(
        "input-search"
    );
    let searchBtn = screen.getByTestId("btn-search");

    expect(container).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();

    fireEvent.change(input, { target: { value: mokValue } });

    fireEvent.click(searchBtn);
    expect(mokFn).toHaveBeenCalledWith(mokValue);
});