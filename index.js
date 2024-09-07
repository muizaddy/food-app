'use strict'

const bars = document.querySelector('.fa-bars-staggered')

const del = document.querySelector('.fa-xmark')

bars.addEventListener('click', function () {
  del.style.display = 'block'
document.querySelector('.lists').style.opacity = 1;
bars.style.display = 'none'
del.style.opacity = 1;
del.style.position = 'absolute'
del.style.top = '40px'
del.style.right = '50px'
})
del.addEventListener('click', function () {
  document.querySelector('.lists').style.opacity = 0;
  bars.style.display = 'block'
  bars.style.opacity = 1
  del.style.opacity = 0;
  del.style.display = 'none'
})