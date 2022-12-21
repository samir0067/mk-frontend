import { render, screen } from "@testing-library/react";
import { Title } from "molecules/Title";

test("Affiche le composent Title", () => {
  render(
    <Title
      id="a56293e8-f080-46c6-9508-804767da4de4"
      primary="Giwraobu vi vez gin botheru fahlil zih"
      idFocused="a56293e8-f080-46c6-9508-804767da4de4"
    />,
  );
  const getTitle = screen.getByTestId("getTitle-id");
  expect(getTitle).toBeInTheDocument();
  expect(getTitle).toHaveTextContent("Giwraobu vi vez gin botheru fahlil zih");
});
