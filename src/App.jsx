import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import Home from "./components/Home"
import Header from "./components/Header";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<>
              <Home />
              <Header />
            </>}></Route>
            <Route path="*" element={<h1>Page not found</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
