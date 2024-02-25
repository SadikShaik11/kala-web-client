import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./src/modules/user-onboarding/LandingPage";
import SignupComp from "./src/modules/user-onboarding/SignupComp";
import SigninComp from "./src/modules/user-onboarding/SigninComp";
import HomePage from "./src/modules/user-onboarding/HomePage";

const routes = createBrowserRouter([{
    path: '/',
    element: <SignupComp />
},
{
    path: '/sign-in',
    element: <SigninComp />
},
{
    path: '/app',
    element: <HomePage />,
}


])

export default routes