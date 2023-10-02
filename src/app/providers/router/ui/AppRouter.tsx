import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.entries(routeConfig).map(([key, value]) => (
          <Route key={key} element={value.element} path={value.path} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
