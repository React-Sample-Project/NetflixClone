import { useEffect } from "react";
import { debounce } from "../../utils";

const throttle = require("lodash.throttle");

export default function useWindow(
  callback,
  { eventName, eventProps, delayProps: { type, waitTime = 200 } }
) {
  useEffect(() => {
    let eventHandler =
      type === "throttle"
        ? throttle(callback, waitTime)
        : debounce(callback, 200);
    window.addEventListener(eventName, eventHandler, eventProps);

    return () => {
      eventHandler.cancel();
      window.removeEventListener(eventName, eventHandler);
    };
  }, [callback, eventName, waitTime, eventProps, type]);
}
