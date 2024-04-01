import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Body from "./body/body";
import Help from "./pages/Help/Help";
import Offer from "./pages/offer/offer";
import Restaurantdetail from "./pages/restaurants/restaurantDetail";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
          {
            path: "/",
            element: <Body/>,
          },
          {
            path:"/offer",
            element:<Offer/>
          },{
            path:"/help",
            element:<Help/>
          },{
            path:"/restaurants/:id",
            element:<Restaurantdetail/>
          }
        ],
      },
      
    
])