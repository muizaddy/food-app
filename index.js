'use strict'

const hamburger = document.querySelector('.hamburger')
const lists = document.querySelector('.lists')
const del = document.querySelector('.delete')
const allsections = document.querySelectorAll('.section')



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

// const revealSection = function(entries, observer){
// const [entry] = entries
// console.log(entry)
// if(!entry.isIntersecting) return 
// entry.target.classList.remove('section-hidden')
// observer.unobserve(entry.target)
// }



// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });

// allsections.forEach(section => { sectionObserver.observe(section)
// section.classList.add('section-hidden')

// }
// )

