// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import { connect, Provider } from "react-redux";
// import store from "./redux/app/store";
// import Home from "./components/Home";
// import Header from "./components/Header";
// import { getUserAuth } from "./redux/actions";
// import React, { useEffect } from "react";

// const App = (props) => {

//   useEffect(()=> {
//     props.getUserAuth()
//   }, []);
//   return (
//     <Provider store={store}>
//       <div>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Login />}></Route>
//             <Route
//               path="/home"
//               element={
//                 <>
//                   <Home />
//                   <Header />
//                 </>
//               }></Route>
//             <Route path="*" element={<h1>Page not found</h1>}></Route>
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </Provider>
//   );
// };

// const mapStateToProps = (state) => {
//   return {};
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getUserAuth: () => dispatch(getUserAuth()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);




import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { connect, Provider } from "react-redux";
import store from "./redux/app/store"; // تأكد من المسار الصحيح للـ store
import Home from "./components/Home";
import Header from "./components/Header";
import { getUserAuth } from "./redux/actions";
import React, { useEffect } from "react";

const App = (props) => {

  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<><Home /><Header /></>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserAuth: () => dispatch(getUserAuth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  () => (
    <Provider store={store}>
      <App />
    </Provider>
  )
);
