// С использованием свойств и методов DOM-элементов, напиши скрипт, который:

// Ссчитает и выведет в консоль количество категорий в  ul#categories, то есть элементов  li.item.
// Для каждого элемента  li.item в списке  ul#categoriesнайдет и выведет в консоль текст заголовка элемента (тега  <h2>) и количество элементов в категории (всех  <li>, вложенных в него).


// На что будет обращать внимание ментор при проверке:

// Количество категорий, их название и количество элементов получены с помощью свойств и методов DOM-элементов
// Данные по каждой категории были получены и выведены в консоль в теле цикла или методаforEach()


const categoriesList = document.querySelector('#categories');


const items = categoriesList.querySelectorAll('.item');


console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('ul li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
