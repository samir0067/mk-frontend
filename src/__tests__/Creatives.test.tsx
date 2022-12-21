import { render, screen } from "@testing-library/react";
import CreativesMain from "pages/CreativesMain";

// test pour un seul composant à répéter sur tous les autres composants
test("Display the Creative component", () => {
  render(<CreativesMain />);
  const creatives = screen.getAllByTestId("creatives-id");
  expect(creatives).not.toBeInTheDocument();
});
