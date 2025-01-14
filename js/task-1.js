const categories = [];

const elements = document.querySelectorAll("ul#categories li.item");

elements.forEach(element => {
    
    const title = element.querySelector("h2").textContent;

    const itemCont = element.querySelectorAll("li").length;

    categories.push({title, itemCont });
});
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  console.log(`Category: ${category.title}`);
  console.log(`Elements: ${category.itemCont}`);
});





