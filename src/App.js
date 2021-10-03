import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Blogs from "./components/Blogs";
import BlogAdd from "./components/BlogAdd";
import BlogUpdate from "./components/BlogUpdate";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import {useSelector } from "react-redux";

function App() {
  const username = useSelector((state) => state.userName);

  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/">
            {username ? <Redirect to="/blogs" /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/blogs">
            {username ? <Blogs /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/update/:id">
            {username ? <BlogUpdate /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/add">
            {username ? <BlogAdd /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          {/* <Route exact path="/products/:id">
            <ProductDetail />
          </Route> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
