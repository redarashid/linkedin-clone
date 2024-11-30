import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { connect } from "react-redux";
import Home from "./components/Home";
import Header from "./components/Header";
import { getUserAuth } from "./redux/actions";
import { useEffect } from "react";
import RequireAuth from "./components/requireAuth";

const App = (props) => {
  useEffect(() => {
    props.getUserAuth();
  }, [props]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
                <Header />
              </RequireAuth>
            }></Route>
          <Route path="*" element={<h1>Page not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserAuth: () => dispatch(getUserAuth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
