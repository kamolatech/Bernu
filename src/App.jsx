import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/index.js";
import { Suspense } from "react";
import MainLayout from "./layouts/MainLayout.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<h1>abc</h1>}>
              <Home/>
            </Suspense>
          ),
        },
        {
          path: "profile",
          element: (
            <Suspense fallback={<h1>abc</h1>}>
              <h1>Profile</h1>
            </Suspense>
          ),
        },
        // {
        //   path: "cart",
        //   element: (
        //     <Suspense fallback={<h1>abc</h1>}>
        //       <Cart />
        //     </Suspense>
        //   ),
        // },
        // {
        //   path: "qidiruv",
        //   element: (
        //     <Suspense fallback={<h1>abc</h1>}>
        //       <Search />
        //     </Suspense>
        //   ),
        // },
      ],
    },
    // {
    //   path: "*",
    //   element: (
    //     <Suspense fallback={<Loading />}>
    //       <NotFound />
    //     </Suspense>
    //   ),
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
