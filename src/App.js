import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GlobalStyle from "./Global.Styles";
import { Main, MainView } from "./App.Styles";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import NetflixSpinner from "./components/NetflixSpinner/NetflixSpinner";

const Home = lazy(() => import("./pages/Home/Home"));
const Genre = lazy(() => import("./pages/Genre/Genre"));
const MyList = lazy(() => import("./pages/MyList/MyList"));
const Search = lazy(() => import("./pages/Search/Search"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const Auth = lazy(() => import("./pages/Auth/Auth"));
const ProtectedRoute = lazy(() =>
  import("./components/ProtectedRoute/ProtectedRoute")
);

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
  ];
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<NetflixSpinner />}>
        <>
          <GlobalStyle />
          <Switch>
            <Route exact path="/">
              <Auth />
            </Route>
            {/* <Route> */}
            <>
              <div>
                <div>
                  <Main>
                    {/** Navbar is kept outside to prevent re-rendering of Navbar on protected route change */}
                    <Navbar />
                    {pages.map((page, index) => (
                      <ProtectedRoute key={index} exact path={page.route}>
                        <MainView>
                          <page.component />
                        </MainView>
                      </ProtectedRoute>
                    ))}
                  </Main>
                </div>
              </div>
            </>
            {/* </Route> */}
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </>
      </Suspense>
    </Router>
  );
}

export default App;
