let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;

let flag1 = 0;
let flag2 = 0;
let flag3 = 0;

let selectedFilter = "none";
let selectedCategory = "all";

window.onload = function () {
  displayItemsFromLocalStorage(); // הוספת קריאה לפונקציה
  declareViewEvenets();
}

// פונקציה להצגת המוצרים מה-LocalStorage
const displayItemsFromLocalStorage = () => {
  const itemsArray = JSON.parse(localStorage.getItem('itemsArray')) || [];
  const items = itemsArray.map(item => ({
    name: item.name,
    price: item.price,
    img: item.img,
    category: item.category,
    filter: item.filter
  }));
  showProducts(items);
};

const showProducts = (items) => {
  let productsContainer = document.querySelector("#id_products");
  productsContainer.innerHTML = '';

  items.map(item => {
    let div = document.createElement("div");
    div.className = "col-lg-2 border p-2 product"; // הוספת ה- class "product"
    productsContainer.append(div);

    div.style.backgroundImage = `url(${item.img})`;

    div.innerHTML += `
        <img src="${item.img}" class="product-image" alt="${item.name}">
        <div class="product-details">
          <strong>
            ${item.name}
          </strong>
          <br>
          <strong> 
          ₪ מחיר:  ${item.price} 
          </strong>
        </div>
    `;
  });
};

const declareViewEvenets = () => {
  // קטגוריה
  let filterPastries = document.querySelector("#filterPastries");
  let filterDrink = document.querySelector("#filterDrink");
  let filterCakes = document.querySelector("#filterCakes");
  let filterCream = document.querySelector("#filterCream");
  let filterMilkshake = document.querySelector("#filterMilkshake");

  filterPastries.addEventListener("click", function () {
    counter1++;

    // בדיקה אם הכפתורים האחרים לחוצים
    counter2 = 0;
    counter3 = 0;
    counter4 = 0;
    counter5 = 0;
    blackButton();

    if (counter1 == 1) {
      filterPastries.style.color = "black";
      filterPastries.style.background = "#f2e8cf";
    }
    else {
      counter1 = 0;

    }
    filterByCategoryAndFilter();
  });

  filterDrink.addEventListener("click", function () {
    counter2++;

    // בדיקה אם הכפתורים האחרים לחוצים
    counter1 = 0;
    counter3 = 0;
    counter4 = 0;
    counter5 = 0;
    blackButton();

    if (counter2 == 1) {
      filterDrink.style.color = "black";
      filterDrink.style.background = "#f2e8cf";
    }
    else {
      counter2 = 0;

    }
    filterByCategoryAndFilter();
  });

  filterCakes.addEventListener("click", function () {
    counter3++;

    // בדיקה אם הכפתורים האחרים לחוצים
    counter1 = 0;
    counter2 = 0;
    counter4 = 0;
    counter5 = 0;
    blackButton();

    if (counter3 == 1) {
      filterCakes.style.color = "black";
      filterCakes.style.background = "#f2e8cf";
    }
    else {
      counter3 = 0;
    }
    filterByCategoryAndFilter();
  });


  filterCream.addEventListener("click", function () {
    counter4++;

    // בדיקה אם הכפתורים האחרים לחוצים
    counter1 = 0;
    counter2 = 0;
    counter3 = 0;
    counter5 = 0;
    blackButton();

    if (counter4 == 1) {
      filterCream.style.color = "black";
      filterCream.style.background = "#f2e8cf";
    }
    else {
      counter4 = 0;
    }
    filterByCategoryAndFilter();
  });


  filterMilkshake.addEventListener("click", function () {
    counter5++;

    // בדיקה אם הכפתורים האחרים לחוצים
    counter1 = 0;
    counter2 = 0;
    counter3 = 0;
    counter4 = 0;
    blackButton();

    if (counter5 == 1) {
      filterMilkshake.style.color = "black";
      filterMilkshake.style.background = "#f2e8cf";
    }
    else {
      counter5 = 0;
    }
    filterByCategoryAndFilter();
  });

  // פילטר
  // // קריאה לפונקציה שמציגה פריטים על פי פילטר וקטגוריה
  let filter1 = document.querySelector("#filter1");
  let filter2 = document.querySelector("#filter2");

  filter1.addEventListener("click", function () {
    flag1++;

    flag2 = 0;
    flag3 = 0;
    blackButtonFilter();

    if (flag1 == 1) {
      filter1.style.color = "black";
      filter1.style.background = "#F2E8CF";
    }
    else {
      flag1 = 0;
    }
    filterByCategoryAndFilter();
  });

  filter2.addEventListener("click", function () {
    flag2++;

    flag1 = 0;
    flag3 = 0;
    blackButtonFilter();

    if (flag2 == 1) {
      filter2.style.color = "black";
      filter2.style.background = "#F2E8CF";
    }
    else {
      flag2 = 0;
    }
    filterByCategoryAndFilter();
  });
};

const filterByCategoryAndFilter = () => {
  selectedCategory = getSelectedCategory();
  selectedFilter = getSelectedFilter();
  const itemsArray = JSON.parse(localStorage.getItem('itemsArray'));

  let filteredProducts;

  if (selectedCategory == "all") {
    if (selectedFilter == "none") {
      displayItemsFromLocalStorage();
    }
    else {
      filteredProducts = itemsArray.filter(item => item.filter === selectedFilter);
      showProducts(filteredProducts);
    }
  }
  else {
    if (selectedFilter == "none") {
      filteredProducts = itemsArray.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());
      showProducts(filteredProducts);
    }
    else {
      filteredProducts = itemsArray.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase() && item.filter === selectedFilter);
      showProducts(filteredProducts);
    }
  }

}

const blackButton = () => {
  let filterPastries = document.querySelector("#filterPastries");
  let filterDrink = document.querySelector("#filterDrink");
  let filterCakes = document.querySelector("#filterCakes");
  let filterCream = document.querySelector("#filterCream");
  let filterMilkshake = document.querySelector("#filterMilkshake");

  filterPastries.style.color = "#f2e8cf";
  filterDrink.style.color = "#f2e8cf";
  filterCakes.style.color = "#f2e8cf";
  filterCream.style.color = "#f2e8cf";
  filterMilkshake.style.color = "#f2e8cf";

  filterPastries.style.background = "black";
  filterDrink.style.background = "black";
  filterCakes.style.background = "black";
  filterCream.style.background = "black";
  filterMilkshake.style.background = "black";
}


const getSelectedCategory = () => {

  if (counter1 == 1)
    return "pastry";
  else if (counter2 == 1)
    return "drink";
  else if (counter3 == 1)
    return "cake";
  else if (counter4 == 1)
    return "ice cream";
  else if (counter5 == 1)
    return "milkshake";

  else
    return 'all';
}

const blackButtonFilter = () => {
  let filter1 = document.querySelector("#filter1");
  let filter2 = document.querySelector("#filter2");

  filter1.style.color = "#F2E8CF";
  filter2.style.color = "#F2E8CF";

  filter1.style.background = "black";
  filter2.style.background = "black";
}

const getSelectedFilter = () => {
  if (flag1 == 1)
    return "1";
  else if (flag2 == 1)
    return "2";

    else
    return "none";
}