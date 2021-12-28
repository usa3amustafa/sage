// const header = document.querySelector('#welcome')
const menu = document.querySelector('#menu')
const nav = document.querySelector('.nav')
const link = document.querySelectorAll('.link')
const links = document.querySelector('.links')
const header = document.querySelector('.header-section')

// toggle hamburger
menu.addEventListener('click', function () {
  links.classList.toggle('show-links')
})

// stickyNav
const stickyNav = function (entries) {
  const [entry] = entries
  console.log(entry)
  if (!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')
}

const headerobserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
})

headerobserver.observe(header)

// hide navbar on click
link.forEach(l =>
  l.addEventListener('click', () => {
    links.classList.toggle('show-links')
  })
)
