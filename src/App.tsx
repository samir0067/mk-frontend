import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Creatives from "organisms/Creatives";
import Header from "molecules/Header";
import CreativeForm from "organisms/CreativeForm";

const App: FC = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Creatives />} />
          <Route path="/creatives" element={<CreativeForm />} />
          {/*<Route path="/creatives/:id" element={<CreativeForm />} />*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
