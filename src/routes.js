// import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
// layouts
import MainLayout from "./layouts/main";
// import DashboardLayout from "./layouts/dashboard";
// import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
// components
// import LoadingScreen from "./components/LoadingScreen";
import Admin2Guard from "./guards/Admin2Guard"
import Homepage from "pages/Homepage";
import Research from "pages/Research";
import Assets from "pages/Assets";
import Resell from "pages/Resell";
import Dashboard from "pages/Dashboard";
import Minting from "pages/Minting";
// ----------------------------------------------------------------------

// const Loadable = (Component) => (props) => {
//   return (
//     <Suspense fallback={<LoadingScreen />}>
//       <Component {...props} />
//     </Suspense>
//   );
// };

export default function Router() {
  return useRoutes([
    // Main Routes
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/assets", element: <Assets /> },
        { path: "/research", element: <Research /> },
        { path: "/resell", element: <Resell /> },
        { 
          path: "/dashboard", 
          element: (
            <Admin2Guard>
              <Dashboard />
            </Admin2Guard>
          ) 
        },
        { 
          path: "/dashboard/minting", 
          element: (
            <Admin2Guard>
              <Minting />
            </Admin2Guard>
          ) 
        }
      ],
    },
  ]);
}

// IMPORT COMPONENTS

// Dashboard
// const PageOne = Loadable(lazy(() => import('./pages/PageOne')));
// Main
