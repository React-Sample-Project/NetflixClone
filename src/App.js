import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Genre from "./pages/Genre";

import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./Global.Styles";
import { Main, MainView } from "./App.Styles";

import Navbar from "./components/Navbar";

function App() {
  const pages = [
    {
      route: "/",
      component: Home,
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
