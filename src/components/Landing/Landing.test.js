import React from "react";
import Landing from "./Landing";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { Router } from "react-router";

describe("Landing", () => {
  it("as a user, I should see three main buttons on the Landing page.", () => {
    const router = (
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );

    const { getByText, getAllByRole } = render(router);
    const mostPopularButton = getByText("Popular Fish");
    const menuButtons = getAllByRole("button");

    expect(mostPopularButton).toBeInTheDocument();
    expect(menuButtons).toHaveLength(3);
  });
});
