import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "pages/NotFound";
import CreativesMain from "pages/CreativesMain";
import CreativeForm from "pages/CreativeForm";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreativesMain />} />
        <Route path="/creative/:id/edit" element={<CreativeForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
