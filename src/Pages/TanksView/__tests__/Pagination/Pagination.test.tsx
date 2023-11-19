import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "../../../../components/common/Pagination";

afterEach(() => {
    cleanup();
});

test("Pagination component test", () => {
    const mokFn = jest.fn();
    const mokMaxPages = 40;
    const mokPage = 3;
    const mokCount = 5

    render(
        <Pagination page={mokPage} count={mokMaxPages} localCount={mokCount} countPage={mokMaxPages} onChangePage={mokFn} onChangeRows={mokFn} loading={false}  />
    );

    let container = screen.getByTestId("pagination__main");

    expect(container).toBeInTheDocument();

});