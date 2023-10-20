import "./_functions";
import "./_components";
import AOS from "aos";

AOS.init({
  once: true,
});

if (
  /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
  (navigator.maxTouchPoints &&
    navigator.maxTouchPoints > 2 &&
    /MacIntel/.test(navigator.platform))
) {
  document.body.classList.add("ios");
}
