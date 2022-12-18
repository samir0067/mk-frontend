import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "pages/NotFound";
import CreativeList from "organisms/CreativeList";
import CreativeDetail from "organisms/CreativeDetail";
import CreativeForm from "organisms/CreativeForm";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreativeList />} />
        <Route path="/creatives/:id" element={<CreativeDetail />} />
        <Route path="/creatives/form" element={<CreativeForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
