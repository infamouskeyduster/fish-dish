import React from "react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/";

describe("Header", () => {
  it("as a user, I should see the logo whenever the Header is rendered", () => {
    const router = (
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const { getByAltText } = render(router);
    const fishDishLogo = getByAltText("Fish Dish Logo");

    expect(fishDishLogo).toBeInTheDocument();
  });
});
