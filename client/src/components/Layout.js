import React from "react";
import { HeaderPage } from "../page/HeaderPage";

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <HeaderPage />
      {children}
    </React.Fragment>
  );
};
