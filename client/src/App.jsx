// import Topbar from "./components/topbar/Topbar";
// import Homepage from "./pages/homepage/Homepage";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Settings from "./pages/settings/Settings";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//
// function App() {
//   const currentUser = true;
//   return (
//     <Router>
//       <Topbar />
//       <Switch>
//         <Route exact path="/">
//           <Homepage />
//         </Route>
//         <Route path="/posts">
//           <Homepage />
//         </Route>
//         <Route path="/register">
//           {currentUser ? <Homepage /> : <Register />}
//         </Route>
//         <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
//         <Route path="/post/:id">
//           <Single />
//         </Route>
//         <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
//         <Route path="/settings">
//           {currentUser ? <Settings /> : <Login />}
//         </Route>
//       </Switch>
//     </Router>
//   );
// }
//
// export default App;

import Home from "./pages/homepage/Homepage";
import TopBar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
