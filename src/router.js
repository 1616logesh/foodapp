import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Body from "./body/body";
import Offer from "./pages/offer/offer";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
          {
            path: "/",
            element: <Body/>,
          },
        ],
      },
      {
        path:"/offer",
        element:<Offer/>
      }
    
])