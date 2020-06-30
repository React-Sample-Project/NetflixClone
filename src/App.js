import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import { history } from "./analytics";
import GlobalStyle from "./Global.Styles";
import { Main, MainView } from "./App.Styles";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import NetflixSpinner from "./components/NetflixSpinner/NetflixSpinner";

const Media = lazy(() => import("./pages/Media/Media"));
const Home = lazy(() => import("./pages/Home/Home"));
const Genre = lazy(() => import("./pages/Genre/Genre"));
const Personalization = lazy(() =>
  import("./pages/Personalization/Personalization")
);
const Search = lazy(() => import("./pages/Search/Search"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const Auth = lazy(() => import("./pages/Auth/Auth"));
const ProtectedRoute = lazy(() =>
  import("./components/ProtectedRoute/ProtectedRoute")
);

function App() {
  const pages = [
    {
      route: "/:account(watchlist|favorite)+/:mediaType",
      component: Personalization,
    },
    {
      route: "/search",
      component: Search,
    },
    {
      route: "/:type(tv|movie)+",
      component: Home,
    },
    {
      route: "/:type(tv|movie)+/genre/:id",
      component: Genre,
    },
    {
      route: "/:type(tv|movie)+/:mediaId",
      component: Media,
    },
  ];
  return (
    <Router history={history}>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense
          fallback={
            <NetflixSpinner
              style={{ position: "absolute", top: "50%", bottom: "50%" }}
            />
          }
        >
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
                      <Footer />
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
      </BrowserRouter>
    </Router>
  );
}

export default App;
