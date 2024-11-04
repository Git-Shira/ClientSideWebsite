// localStorage.clear();
let itemsArray = JSON.parse(localStorage.getItem('itemsArray'));

function displayItems() {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    displayTitle();

    for (let i = 0; i < itemsArray.length; i++) {
        let itemDiv = document.createElement("div");

        // לעיצוב class הוספת
        itemDiv.className = "item";

        // Container for buttons
        let buttonsContainer = document.createElement("div");
        buttonsContainer.className = " item-buttons column buttons";

        let editButton = document.createElement("button");
        editButton.onclick = createEditFunction(i);

        let editIcon = document.createElement("i");
        editIcon.className = "fa fa-pencil";
        editIcon.setAttribute("aria-hidden", "true");

        editButton.appendChild(editIcon);
        buttonsContainer.appendChild(editButton);


        let deleteButton = document.createElement("button");
        deleteButton.onclick = createDeleteFunction(i);

        let deleteIcon = document.createElement("i");
        deleteIcon.className = "fa fa-trash-o";
        deleteIcon.setAttribute("aria-hidden", "true");

        deleteButton.appendChild(deleteIcon);
        buttonsContainer.appendChild(deleteButton);

        // Append buttons container to itemDiv
        itemDiv.appendChild(buttonsContainer);

        let filterElement = document.createElement("p");
        filterElement.className = "column";
        filterElement.textContent = itemsArray[i].filter;
        itemDiv.appendChild(filterElement);

        let categoryElement = document.createElement("p");
        categoryElement.className = "column";
        categoryElement.textContent = itemsArray[i].category;
        itemDiv.appendChild(categoryElement);

        let priceElement = document.createElement("p");
        priceElement.className = "column";
        priceElement.textContent = '₪ ' + itemsArray[i].price ;
        itemDiv.appendChild(priceElement);

        let nameElement = document.createElement("p");
        nameElement.className = "column";
        nameElement.textContent = itemsArray[i].name;
        itemDiv.appendChild(nameElement);

        let imgElement = document.createElement("img");
        imgElement.className = "column";
        imgElement.src = itemsArray[i].img;
        imgElement.alt = itemsArray[i].name;
        imgElement.width = 50;
        itemDiv.appendChild(imgElement);
    

        outputDiv.appendChild(itemDiv);
    }
}


function displayTitle() {
    let outputTitle = document.getElementById("output");

    let titleDive = document.createElement("div");

    titleDive.className = "item";

    let buttonsElement = document.createElement("p");
    buttonsElement.className = "  item-buttons column buttons";
    buttonsElement.textContent = "ערוך / מחק";
    titleDive.appendChild(buttonsElement);

    let filterElement = document.createElement("p");
    filterElement.className = "column";
    filterElement.textContent = "פילטר";
    titleDive.appendChild(filterElement);

    let categoryElement = document.createElement("p");
    categoryElement.className = "column";
    categoryElement.textContent = "קטגוריה";
    titleDive.appendChild(categoryElement);

    let priceElement = document.createElement("p");
    priceElement.className = "column";
    priceElement.textContent = "מחיר";
    titleDive.appendChild(priceElement);

    let nameElement = document.createElement("p");
    nameElement.className = "column";
    nameElement.textContent = "שם";
    titleDive.appendChild(nameElement);

    let imgElement = document.createElement("img");
    imgElement.className = "column";
    imgElement.src = "תמונה";
    imgElement.alt = "תמונה";
    imgElement.width = 50;
    titleDive.appendChild(imgElement);


    outputTitle.appendChild(titleDive);

}

// פונקציה ליצירת פונקציה מחיקה ייחודית לכל כפתור
function createDeleteFunction(index) {
    return function () {
        deleteItem(index);
    };
}

// פונקציה למחיקת מוצר מהמערך
function deleteItem(index) {
    itemsArray.splice(index, 1);
    saveToLocalStorage(); // שמירה ב-local storage
    displayItems(); // רענון התצוגה
}

// פונקציה ליצירת פונקציה עריכה ייחודית לכל כפתור
function createEditFunction(index) {
    return function () {
        editItem(index);
    };
}


// עריכת מוצר
function editItem(index) {
    let newName = prompt("שם:", itemsArray[index].name);
    let newPrice = prompt("מחיר:", itemsArray[index].price);

    if (newName !== "") {
        itemsArray[index].name = newName;
    }
    if (newPrice !== "" && !isNaN(newPrice)) {
        itemsArray[index].price = parseFloat(newPrice);
    }


    saveToLocalStorage();
    displayItems();
}




// הוספת מוצר חדש
function addNewItem() {
    let newName = prompt("הכנס שם למוצר החדש:");
    let newPrice = prompt("הכנס מחיר למוצר החדש:");
    let newImg = prompt("הכנס URL לתמונה של המוצר:");
    let newCategory = prompt("הכנס קטגוריה למוצר החדש:");
    let newFilter = prompt("הכנס פילטר למוצר החדש:");

    if (
        newName !== "" &&
        newPrice !== "" &&
        !isNaN(newPrice) &&
        newCategory !== "" &&
        newImg !== "" &&
        newFilter !== ""
    ) {
        let newItem = {
            name: newName,
            price: parseFloat(newPrice),
            category: newCategory,
            img: newImg,
            filter: newFilter,
        };
        itemsArray.push(newItem);
        saveToLocalStorage();
        displayItems();
    }
}

// פונקציה לשמירת המערך ב-local storage
function saveToLocalStorage() {
    localStorage.setItem('itemsArray', JSON.stringify(itemsArray));
}


// קריאה לפונקציה על מנת להציג את התוצאות ב-HTML
displayItems();



