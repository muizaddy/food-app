const cart = document.querySelectorAll('.cart');
let currentNumber = 0;
cart.forEach(c =>
  c.addEventListener('click', function (e) {
    c.style.backgroundColor = 'transparent';
    c.style.border = 'none';
    c.style.cursor = 'default';
    c.innerHTML = `
    <ul class="click">
          <li class="decrease opt">&minus;</li>
          <li class"cart_num">1</li>
          <li class="increase opt">&plus;</li>
        </ul>
 `;
    c.children[0].children[1].textContent = 0;
    if (e.target.classList.contains('decrease') && currentNumber > 0) {
      currentNumber--;
      c.children[0].children[1].textContent = currentNumber;
    } else if (e.target.classList.contains('increase') && currentNumber >= 0) {
      currentNumber++;
      c.children[0].children[1].textContent = currentNumber;
    }
    document.querySelector('#item').textContent = currentNumber;
    c.closest('.img--cart').children[0].style.border = '2px solid var(--Red)'
  })
);
