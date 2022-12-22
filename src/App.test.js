import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";

test("devrait afficher la page non trouvée", async () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>,
  );

  const content = await waitFor(() => screen.findByTestId("notFound-id"));
  expect(content).toBeTruthy();
});
