import React, { Suspense } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
const LazyOutlet = React.lazy(() =>
  import("react-router-dom").then((module) => ({ default: module.Outlet }))
);

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="outlet">
        <Suspense fallback={<div style={{ height: "80vh" }}></div>}>
          <LazyOutlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
