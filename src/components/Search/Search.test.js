import React from "react";
import Search from "./Search";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/";

let mockupdateStateWithSearchInput;

describe('Search', () => {
  it('as a user, I should be able to search all popular fish within App', () => {

    mockupdateStateWithSearchInput = jest.fn();

    const { getByRole, getByPlaceholderText } = render(
      <MemoryRouter>
        <Search
          updateStateWithSearchInput={mockupdateStateWithSearchInput}
          searchInput={''}
         />
      </MemoryRouter>
    )

    const searchBar = getByPlaceholderText("Search all popular fish…");
    const findMyFishBtn = getByRole("button");

    expect(searchBar).toBeInTheDocument();
    expect(findMyFishBtn).toBeInTheDocument();
  });
});
