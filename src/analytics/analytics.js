import ReactGA from "react-ga";
import auth from "../services/Auth";
import { createBrowserHistory } from "history";

const trackingId = "UA-171302750-1";

ReactGA.initialize(trackingId);

ReactGA.set({
  sessionId: auth.getSessionId(),
});

export const analytics = {
  addEvent: ({ category, action }) => {
    ReactGA.event({
      category,
      action,
    });
  },
};

export const history = createBrowserHistory();

history.listen(({ pathname }) => {
  ReactGA.set({ page: pathname });
  ReactGA.pageview(pathname);
});

export default ReactGA;
