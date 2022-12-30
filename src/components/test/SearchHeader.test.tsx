import SearchHeader from "../SearchHeader";
import userEvent from "@testing-library/user-event";
import { create } from "react-test-renderer";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("search header", () => {
  it("renders correctly", () => {
    const component = create(
      <MemoryRouter>
        <Routes>
          <Route path='/' element={<SearchHeader />} />
        </Routes>
      </MemoryRouter>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("'blackpink'로 이동 시 input에 출력", async () => {
    render(
      <MemoryRouter initialEntries={["/videos/blackpink"]}>
        <Routes>
          <Route path='/videos/:keyword' element={<SearchHeader />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByDisplayValue("blackpink")).toBeInTheDocument();
  });

  it("blackpink 검색 시 화면에 출력", () => {
    const searchKeyword = "hello-world";
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path='/' element={<SearchHeader />} />
          <Route
            path='/videos/:keyword'
            element={<div>{`Search result for ${searchKeyword}`}</div>}
          />
        </Routes>
      </MemoryRouter>
    );
    const searchButton = screen.getByRole("button");
    const searchInput = screen.getByRole("textbox");

    userEvent.type(searchInput, searchKeyword);
    userEvent.click(searchButton);

    expect(screen.getByText(`Search result for ${searchKeyword}`)).toBeInTheDocument();
  });
});
