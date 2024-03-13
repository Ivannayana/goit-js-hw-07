const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const header = category.firstElementChild.textContent;
  const elements = category.lastElementChild.childElementCount;

  console.log(`Category: ${header}`);
  console.log(`Elements: ${elements}`);
});
