import useWindow from "../useWindow/useWindow";

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
  useWindow(callback, {
    eventName: "scroll",
    eventProps: supportsPassive ? { passive: true } : false,
    delayProps: {
      type: "throttle",
    },
  });
}
