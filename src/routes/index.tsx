import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Result from "./result";
import ErrorDetail from "./errorDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorDetail />,
    children: [{ path: "/:word", element: <Result /> }],
  },
]);

export default router;
