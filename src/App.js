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

function App() {
  const pages = [
    {
      route: "/",
      component: Home,
    },
    {
      route: "/my-list",
      component: MyList,
    },
    {
      route: "/search",
      component: Search,
    },
    {
      route: "/:type",
      component: Home,
    },
    {
      route: "/:type/genre/:id",
      component: Genre,
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
                  {pages.map((page, index) => (
                    <Route key={index} exact path={page.route}>
                      <page.component />
                    </Route>
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
