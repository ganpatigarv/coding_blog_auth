import {
    createBrowserRouter,createRoutesFromElements,
    RouterProvider,Link,Route,defer
  } from "react-router-dom";
import App from "../App";
import Auth from "../papes/auth";
 import SignUp from "../papes/auth/signup";
import ErrorPage from "../papes/error-page";
import ContactUs from "../papes/home/contactUs";
import { AuthLayout } from "../components/AuthLayout";
import { HomeLayout } from "../components/HomeLayout";
import { ProtectedLayout } from "../components/ProtectedLayout";
import HomePage from "../papes/home";
import LoginPage from "../papes/auth/login";
import ProfilePage from "../papes/home/profile";
import SettingsPage from "../papes/notification/settings";


const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    }, 3000)
  );

  // For Error
//   const getUserData = () =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       reject("Error");
//     }, 3000)
//   );
export const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
         element={<AuthLayout />}
         errorElement={<ErrorPage />}
          loader={() => defer({ userPromise: getUserData() })}
        >
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
  
        <Route path="/dashboard" element={<ProtectedLayout />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        </Route>
      </>
    )
  );

//   <Route
//   element={<AuthLayout />}
// >
//   <Route element={<HomeLayout />}>
  
//   </Route>

//   <Route path="/dashboard" element={<ProtectedLayout />}>
  
//   </Route>
// </Route>

//   function Rooter() {
//     return (
//       <>
//         <div id="sidebar">
//           <h1>React Router Contacts</h1>
//           <div>
//             <form id="search-form" role="search">
//               <input
//                 id="q"
//                 aria-label="Search contacts"
//                 placeholder="Search"
//                 type="search"
//                 name="q"
//               />
//               <div
//                 id="search-spinner"
//                 aria-hidden
//                 hidden={true}
//               />
//               <div
//                 className="sr-only"
//                 aria-live="polite"
//               ></div>
//             </form>
//             <form method="post">
//               <button type="submit">New</button>
//             </form>
//           </div>
//           <nav>
//             <ul>
//               <li>
//               <Link to={`contacts/1`}>Your Name</Link>

//                 {/* <a href={`/contacts/1`}>Your Name</a> */}
//               </li>
//               <li>
//                 <Link to={`/contacts/2`}>Your Friend</Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         <div id="detail"></div>
//       </>
//     );
//   }
 
// const Root = createBrowserRouter([
//     {
//       path: "/",
//       element: <Rooter />,
//       errorElement:<ErrorPage />,
//       children: [
//         {
//           path: "contacts",
//           element: <ContactUs />,
//         },
//       ]
//     },

//     // {
//     //   path: "/auth",
//     //   element: <Auth />,
//     // },
//     // {
//     //   path: "/login",
//     //   element: <Login />,
//     // },
//     // {
//     //     path: "/signup",
//     //     element: <SignUp />,
//     //   },
//     //   {
//     //     path: "/contacts",
//     //     element: <ContactUs />,
//     //   },

      
//   ]);
// export default Root;