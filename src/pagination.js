const arrowleftEl = document.querySelector('.arrow_left');
const pagesArray = [];
function createPagesList(count_pages) {
  for (let i = 1; i <= count_pages; i += 1) {
    if (count_pages <= 20) {
      pagesArray.push(`<li class="item_page${i}">${i}</li>`);
    } else {
      count_pages = 20;
      pagesArray.push(`<li class="item_page${i}">${i}</li>`);
    }
  }
  console.log(pagesArray);
  return arrowleftEl.insertAdjacentElement('afterend', pagesArray.join(''));
}

createPagesList(16);
