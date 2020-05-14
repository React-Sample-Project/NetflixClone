import { useEffect } from "react";
const throttle = require("lodash.throttle");

let supportsPassive = false;
try {
  var opts = Object.defineProperty({}, "passive", {
    get: function () {
      supportsPassive = true;
      return null;
    },
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {}

export default function useScroll(callback) {
  useEffect(() => {
    let handleScroll = throttle(callback, 200);
    window.addEventListener(
      "scroll",
      handleScroll,
      supportsPassive ? { passive: true } : false
    );

    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callback]);
  // dep is added because initially when useRef is called the elementRef is null. To update its value adding it under dependency
}
