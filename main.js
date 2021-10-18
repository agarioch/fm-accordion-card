const accordionItems = document.querySelectorAll('.faq__list__item');
console.log(accordionItems);
for (let item of accordionItems) {
  item.addEventListener('click', toggleAccordion)
}

function toggleAccordion(e) {
  const listItem = e.currentTarget;

  const question = listItem.querySelector('.faq__list__question--text');
  question.classList.toggle('faq__list__question--selected');

  const answer = listItem.querySelector('.faq__list__answer');
  answer.classList.toggle('faq__list__answer--hidden');

  const arrow = listItem.querySelector('.faq__list__question--icon');
  arrow.classList.toggle('faq__list__question--up-icon');
}