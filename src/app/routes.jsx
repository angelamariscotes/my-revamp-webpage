import { createBrowserRouter } from "react-router-dom";
import Root from "./components/root";
import Home from "./components/home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
    ]
  }
]);
export { router };
