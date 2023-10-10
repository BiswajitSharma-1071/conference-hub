/* tslint:disable */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import AppSection from "../components/AppSection";
import Home from "../components/Home";

const NotFound = React.lazy(() =>
  import("../components/ErrorBoundary/NotFound").then((module) => ({
    default: module.NotFound,
  }))
);

//@ts-ignore
export const LazyComponent = (Component) => (
  <React.Suspense>
    <Component />
  </React.Suspense>
);

// const NavigateToRoutes = () =>{

// }

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/:url*(/+)"
        element={({ location }) => (
          <Navigate
            replace
            to={{
              pathname: location.pathname.replace(/\/+$/, ""),
              search: location.search,
            }}
          />
        )}
      />
      <Route
        path="(.*//+.*)"
        element={({ location }) => (
          <Navigate
            replace
            to={{
              pathname: location.pathname.replace(/\/\/+/g, "/"),
              search: location.search,
            }}
          />
        )}
      />
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path={":section"} element={<AppSection />} />
      </Route>
      <Route path="*" element={LazyComponent(NotFound)} />
    </Routes>
  );
};

export default AppRoutes;
