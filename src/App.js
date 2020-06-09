import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home.Page";
import Genre from "./pages/Genre/Genre.Page";
import MyList from "./pages/MyList/MyList.Page";
import Search from "./pages/Search/Search.Page";

import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./Global.Styles";
import { Main, MainView } from "./App.Styles";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.Component";
import NotFound from "./pages/NotFound/NotFound.Component";
import Auth from "./pages/Auth/Auth.Page";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.Component";

function App() {
  const pages = [
    {
      route: "/my-list",
      component: MyList,
    },
    {
      route: "/search",
      component: Search,
    },
    {
      route: "/:type(tv|movie)?",
      component: Home,
    },
    {
      route: "/:type(tv|movie)?/genre/:id",
      component: Genre,
    },
    {
      route: "*",
      component: NotFound,
    },
  ];
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <GlobalStyle />
        <div>
          <div>
            <Main>
              <Navbar />
              <MainView>
                <Switch>
                  <Route exact path="/">
                    <Auth />
                  </Route>
                  {pages.map((page, index) => (
                    <ProtectedRoute key={index} exact path={page.route}>
                      <Route>
                        <page.component />
                      </Route>
                    </ProtectedRoute>
                  ))}
                </Switch>
              </MainView>
            </Main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
