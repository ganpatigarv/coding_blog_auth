import { Navigate, Outlet, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <nav>
        <Link to="/dashboard/settings">Settings</Link>
        <Link to="/dashboard/profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  )
};

// Second method 
// import { Link, Navigate, useOutlet } from "react-router-dom";
// // ...

// export const ProtectedLayout = () => {
//   const { user } = useAuth();
//   const outlet = useOutlet();

//   if (!user) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <div>
//       <nav>
//         <Link to="/settings">Settings</Link>
//         <Link to="/profile">Profile</Link>
//       </nav>
//       {outlet}
//     </div>
//   );
// };