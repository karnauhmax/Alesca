import "./_functions";
import "./_components";
import AOS from "aos";

AOS.init({
  once: true,
});

if (
  /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
  (navigator.userAgent.match(/Mac/i) && "ontouchend" in document)
) {
  document.body.classList.add("ios");
}
