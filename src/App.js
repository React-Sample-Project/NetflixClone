import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Genre from "./pages/Genre/Genre";
import MyList from "./pages/MyList/MyList";
import Search from "./pages/Search/Search";

import GlobalStyle from "./Global.Styles";
import { Main, MainView } from "./App.Styles";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import NotFound from "./pages/NotFound/NotFound";
import Auth from "./pages/Auth/Auth";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

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
      <>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <Auth />
          </Route>
          {pages.map((page, index) => (
            <ProtectedRoute key={index} exact path={page.route}>
              <Route>
                <div>
                  <div>
                    <Main>
                      <Navbar />
                      <MainView>
                        <page.component />
                      </MainView>
                    </Main>
                  </div>
                </div>
              </Route>
            </ProtectedRoute>
          ))}
        </Switch>
      </>
    </Router>
  );
}

export default App;
