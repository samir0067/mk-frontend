import { fireEvent, render, screen } from "@testing-library/react";
import { IconButton } from "atoms/IconButton";
import { Add } from "@mui/icons-material";
import { Button } from "../../atoms/Button";
import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

const createRouterWrapper =
  (history) =>
  ({ children }) =>
    <Router history={history}>{children}</Router>;

describe("When I am on the CreativeForm page", () => {
  test("and I click on the button icon", () => {
    const openMock = jest.fn();
    render(<IconButton label={<Add />} onClick={openMock} />);
    const open = screen.getByRole("button");
    fireEvent.click(open);
    expect(openMock.mock.calls.length).toBe(1);
  });
  test("and I click on the button to navigate", () => {
    const history = createMemoryHistory();
    render(<Button label="Annuler" variant="outlined" onClick={() => createRouterWrapper(history)} />);
    fireEvent.click(screen.getByText("Annuler"));
    expect(history.location.pathname).toBe("/");
  });
});
