import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts";
import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Shop from "../pages/shop";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:'/shop',
            element:<Shop/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/contact',
            element:<Contact/>
        },
        
        ]
    },
    
])

export default routes