import * as React from "react";
import { layout } from "./layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div className={layout}>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
