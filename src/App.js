// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   Outlet,
// } from "react-router-dom";
// import Login from "./papes/auth/login";
// import SignUp from "./papes/auth/signup";
// import Home from "./papes/home";

// function Users() {
//   return (
//     <div>
//       <nav>
//         <Link to="login">Login</Link>
//         <Link to="signup">Sign Up</Link>
//         <Outlet />
//       </nav>

//     </div>
//   );
// }
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="users" element={<Users />} >
//            <Route path="login" element={<Login />} />
//            <Route path="signup" element={<SignUp />}  />
//           </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;

// const Home = lazy(() => import('./home'));
// const About = lazy(() => import('./about'));

// function App() {
//   return (
//     <Router>
//       <Suspense fallback={<p> Loading...</p>}>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// }