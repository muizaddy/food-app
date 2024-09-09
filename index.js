'use strict'

const hamburger = document.querySelector('.hamburger')
const lists = document.querySelector('.lists')
const del = document.querySelector('.delete')
hamburger.addEventListener('click', function () {
  lists.style.display = 'flex'
  lists.style.opacity = 1;
  lists.style.transition = 'all .5s'
  hamburger.style.display = 'none';
   del.style.display = 'flex'
})

del.addEventListener('click', function(){
  lists.style.opacity = 0.5;
  lists.style.transition = 'all 8s'
  lists.style.display = 'none'
   del.style.display = 'none'
   hamburger.style.display = 'block';
})

