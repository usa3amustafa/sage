const header = document.querySelector('#welcome')
const menu = document.querySelector('#menu')
const nav = document.querySelector('.nav')
const link = document.querySelectorAll('.link')
const links = document.querySelector('.links')

menu.addEventListener('click', function () {
  links.classList.toggle('show-links')
})

const initialCoords = header.getBoundingClientRect()

console.log(initialCoords.y)

window.addEventListener('scroll', () => {
  if (window.scrollY > initialCoords.y) {
    nav.classList.add('sticky')
    link.forEach(l => (l.style.color = '#878787'))
    menu.style.color = '#878787'
  } else {
    nav.classList.remove('sticky')
    link.forEach(l => (l.style.color = '#fef8ff'))
    menu.style.color = '#fef8ff'
  }
})

link.forEach(l =>
  l.addEventListener('click', () => {
    links.classList.toggle('show-links')
  })
)
