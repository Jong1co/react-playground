import React, { ReactNode } from "react";
import { MemoryRouter, Routes } from "react-router-dom";

export const withRouter = (routes: ReactNode, initialEntries = "/") => {
  return (
    <MemoryRouter initialEntries={[initialEntries]}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
};
