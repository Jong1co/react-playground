import SearchHeader from "../SearchHeader";
import userEvent from "@testing-library/user-event";
import { create } from "react-test-renderer";
import { Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { withRouter } from "../../tests/utils";

describe("search header", () => {
  // snapshot test
  // it("renders correctly", () => {
  //   const component = create(withRouter(<Route path='/' element={<SearchHeader />} />));
  //   expect(component.toJSON()).toMatchSnapshot();
  // });

  it("'blackpink'로 이동 시 input에 출력", async () => {
    render(
      withRouter(<Route path='/videos/:keyword' element={<SearchHeader />} />, "/videos/blackpink")
    );

    expect(screen.getByDisplayValue("blackpink")).toBeInTheDocument();
  });

  it("blackpink 검색 시 화면에 출력", () => {
    const searchKeyword = "hello-world";
    render(
      withRouter(
        <>
          <Route path='/' element={<SearchHeader />} />
          <Route
            path='/videos/:keyword'
            element={<div>{`Search result for ${searchKeyword}`}</div>}
          />
        </>
      )
    );
    const searchButton = screen.getByRole("button");
    const searchInput = screen.getByRole("textbox");

    userEvent.type(searchInput, searchKeyword);
    userEvent.click(searchButton);

    expect(screen.getByText(`Search result for ${searchKeyword}`)).toBeInTheDocument();
  });
});
