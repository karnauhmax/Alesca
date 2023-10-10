const links = document.querySelectorAll('[data-scroll-to]');
const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    const sectionToScroll = document.querySelector(`${target.dataset.scrollTo}`);

    if(menu.classList.contains('menu--active')) {
      menu.classList.remove('menu--active');
      document.body.classList.remove('dis-scroll');
      burger.classList.remove('burger--active');
      burger.setAttribute('aria-expanded', false);
      burger.setAttribute('aria-label', 'Open Menu')
    }

    sectionToScroll.scrollIntoView({behavior: 'smooth'});

  })
})


const landscapeMediaQuery = window.matchMedia("(orientation: landscape)");

function handleOrientationChange(event) {
  if (event.matches) {
    menu.classList.remove('menu--active');
    document.body.classList.remove('dis-scroll');
    burger.classList.remove('burger--active');
    burger.setAttribute('aria-expanded', false);
    burger.setAttribute('aria-label', 'Open Menu')

  }
}


landscapeMediaQuery.addEventListener("change", handleOrientationChange);

