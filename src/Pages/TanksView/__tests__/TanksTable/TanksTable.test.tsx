import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import TanksTable from "../../../../components/TanksTable";
import getMokData from "../../MokData";



afterEach(() => {
    cleanup();
});

test("Table component test", () => {

    const mokData = getMokData();

    render(<TanksTable data={mokData.data} />);

    let table = screen.getByTestId("tanks-table");
    let tableRow = screen.getByTestId("table-row");

    expect(table).toBeInTheDocument();
    expect(tableRow).toBeInTheDocument();
});