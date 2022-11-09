import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import ServicesDetails from "../../Pages/Home/Home/ServicesDetails/ServicesDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import AddReview from "../../Pages/AddReview/AddReview";
import MyReview from "../../Pages/MyReview/MyReview";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/services',
            element: <Services></Services>
        },
        {
            path: '/services/:id',
            element: <ServicesDetails></ServicesDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path: '/services/addreview/:id',
            element: <AddReview></AddReview>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path: '/myreviews',
            element: <MyReview></MyReview>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        }
      ]
    },
    {
        path: '*',
        element: <div className="fs-5 mt-5 fw-bold">You got<span className="text-warning">404</span> route! Please correct the URL. <br />
        </div>
    }
]);

export default router;