import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./component/Header";
import ResContainer from "./component/ResContainer";
import ContactUs from "./component/contactUs";
import About from "./component/About";
import Error from "./component/Error";
import RestaurantsMenu from "./component/Restaurantsmenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <>
      <div className="App-Layout">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <ResContainer />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/RestaurantsMenu/:resId",
        element: <RestaurantsMenu />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
