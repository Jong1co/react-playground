import SearchHeader from "../SearchHeader";
import userEvent from "@testing-library/user-event";
import { create } from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

describe("search header", () => {
  it("renders correctly", () => {
    const component = create(<MemoryRouter></MemoryRouter>);
  });
  it("black pink 입력 시 화면에 출력", async () => {});
});
