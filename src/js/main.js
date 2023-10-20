import "./_functions";
import "./_components";
import AOS from "aos";

AOS.init({
  once: true,
});

if (
  /Android/i.test(navigator.userAgent) ||
  /Windows/i.test(navigator.userAgent) ||
  (/(Macintosh|Mac)/i.test(navigator.platform) &&
    !/iPad/i.test(navigator.userAgent))
) {
  document.body.classList.add("not-ios");
}
