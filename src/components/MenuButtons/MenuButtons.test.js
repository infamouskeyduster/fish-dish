import React from "react";
import MenuButtons from "./MenuButtons";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/";

describe('Menu Buttons', () => {
  it('wherever the MenuButtons component is rendered, I should see three buttons POPULAR, SAVED, SEARCH', () => {
    const { getByText } = render(
      <MemoryRouter>
        <MenuButtons />
      </MemoryRouter>
    )

    const popularBtn = getByText("Popular");
    const savedBtn = getByText("Saved");
    const searchBtn = getByText("Search");

    expect(popularBtn).toBeInTheDocument();
    expect(savedBtn).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  });
});
