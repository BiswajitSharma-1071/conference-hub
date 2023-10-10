import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "@sentry/react";
import ErrorFallbackComponent from "./components/ErrorBoundary/ErrorFallbackComponent";
import { AppContextProvider } from "./context/AppContextProvider";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Router basename="/conference-hub/">
      <AppContextProvider>
        <ErrorBoundary fallback={<ErrorFallbackComponent />}>
          <AppRoutes />
        </ErrorBoundary>
      </AppContextProvider>
    </Router>
  );
};

export default App;
