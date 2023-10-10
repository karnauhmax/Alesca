import "./_functions";
import "./_components";
import AOS from "aos";


AOS.init({
  once: true
});

if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  document.body.classList.add('ios');
}
