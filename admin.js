// localStorage.clear();
let itemsArray = JSON.parse(localStorage.getItem('itemsArray')) || [
    // hot drink
    {
        name: "קפוצ'ינו",
        price: 12,
        img: "./images/drink/Cappuccino.jpg",
        category: "drink",
        filter: "1",
    },
    {
        name: "אספרסו",
        price: 12,
        img: "./images/drink/Espresso.jpg",
        category: "drink",
        filter: "2",
    },
    {
        name: "קפה שחור",
        price: 10,
        img: "./images/drink/Black coffee.jpg",
        category: "drink",
        filter: "2",
    },
    {
        name: "קפה קר",
        price: 8,
        img: "./images/drink/Cold coffee.jpeg",
        category: "drink",
        filter: "1",
    },
    {
        name: "שוקו חם",
        price: 10,
        img: "./images/drink/Creamy hot chocolate.jpeg",
        category: "drink",
        filter: "1",
    },
    {
        name: "שוקו מרשמלו ",
        price: 10,
        img: "./images/drink/Hot marshmallow chocolate.jpg",
        category: "drink",
        filter: "1",
    },
    {
        name: "סחלב חם",
        price: 12,
        img: "./images/drink/Hot orchid.jpg",
        category: "drink",
        filter: "1",
    },

    // milkshakes
    {
        name: "מילקשייק וניל",
        price: 18,
        img: "./images/milkshakes/Vanilla milkshake.jpg",
        category: "milkshake",
        filter: "1",
    },
    {
        name: "מילקשייק קרמל",
        price: 18,
        img: "./images/milkshakes/Caramel milkshake.jpg",
        category: "milkshake",
        filter: "1",
    },
    {
        name: "מילקשייק לוטוס",
        price: 18,
        img: "./images/milkshakes/Lotus milkshake.jpeg",
        category: "milkshake",
        filter: "1",
    },
    {
        name: "מילקשייק אוראו",
        price: 18,
        img: "./images/milkshakes/Oreo milkshake.jpg",
        category: "milkshake",
        filter: "1",
    },
    {
        name: "מילקשייק מוקה",
        price: 18,
        img: "./images/milkshakes/Mocha milkshake.jpg",
        category: "milkshake",
        filter: "1",
    },
    {
        name: "מילקשייק שוקולד",
        price: 18,
        img: "./images/milkshakes/Chocolate milkshake.jpeg",
        category: "milkshake",
        filter: "1",
    },
    {
        name: "מילקשייק בננה קרמל",
        price: 18,
        img: "./images/milkshakes/Banana caramel milkshake.jpeg",
        category: "milkshake",
        filter: "1",
    },
    {
        name: "מילקשייק מנגו",
        price: 18,
        img: "./images/milkshakes/Mango milkshake.jpeg",
        category: "milkshake",
        filter: "1",
    },
    {
        name: "מילקשייק פטל",
        price: 18,
        img: "./images/milkshakes/Raspberry milkshake.jpeg",
        category: "milkshake",
        filter: "1",
    },
    {
        name: "מילקשייק תות",
        price: 18,
        img: "./images/milkshakes/Strawberry milkshake.jpg",
        category: "milkshake",
        filter: "1",
    },
    {
        name: "מילקשייק אוכמניות",
        price: 18,
        img: "./images/milkshakes/Bluberry milkshake.jpeg",
        category: "milkshake",
        filter: "1",
    },

    // icecream
    {
        name: "גלידת וניל-קרמל-שוקולד",
        price: 12,
        img: "./images/ice cream/Vanilla-Caramel-Chocolate ice cream.jpg",
        category: "ice cream",
        filter: "1",
    },
    {
        name: "גלידת בננה",
        price: 10,
        img: "./images/ice cream/Banana ice cream cup.jpeg",
        category: "ice cream",
        filter: "1",
    },
    {
        name: "גביע גלידת וניל דה לוקס",
        price: 18,
        img: "./images/ice cream/De Luxe Vanilla ice cream cone.jpg",
        category: "ice cream",
        filter: "1",
    },
    {
        name: "גביע גלידת שוקולד-עוגיות-וניל",
        price: 14,
        img: "./images/ice cream/Chocolate-Cookies-Vanilla ice cream cone.jpeg",
        category: "ice cream",
        filter: "1",
    },
    {
        name: "גביע גלידת וניל מרשמלו",
        price: 12,
        img: "./images/ice cream/Marshmallow ice cream cone.jpg",
        category: "ice cream",
        filter: "1",
    },
    {
        name: "גביע גלידת בננה-תות-וניל",
        price: 16,
        img: "./images/ice cream/Banana-Strawberry-Vanilla ice cream cone.jpeg",
        category: "ice cream",
        filter: "1",
    },
    {
        name: "גביע גלידת קשת",
        price: 18,
        img: "./images/ice cream/Rainbow ice cream cone.jpeg",
        category: "ice cream",
        filter: "1",
    },
    {
        name: "מגנום קרמל",
        price: 14,
        img: "./images/ice cream/Magnum caramel.jpeg",
        category: "ice cream",
        filter: "1",
    },
    {
        name: "מגנום פיסטוק",
        price: 14,
        img: "./images/ice cream/Magnum pistachio.jpeg",
        category: "ice cream",
        filter: "1",
    },
    {
        name: "מגנום תות ושוקלד לבן",
        price: 14,
        img: "./images/ice cream/Magnum raspberry white chocolate.jpeg",
        category: "ice cream",
        filter: "1",
    },
    {
        name: "מגנום שוקולד",
        price: 14,
        img: "./images/ice cream/Mugnum chocolate.jpeg",
        category: "ice cream",
        filter: "1",
    },
    {
        name: "כדור גלידה וניל",
        price: 6,
        img: "./images/ice cream/Vanilla ice cream scoop.jpeg",
        category: "ice cream",
        filter: "1",
    },
    {
        name: "כדור גלידה קוקוס",
        price: 6,
        img: "./images/ice cream/Coconut ice cream scoop.jpeg",
        category: "ice cream",
        filter: "1",
    },
    {
        name: "כדור גלידה קרמל מלוח",
        price: 6,
        img: "./images/ice cream/Salted caramel ice cream scoop.jpeg",
        category: "ice cream",
        filter: "1",
    },
    {
        name: "כדור גלידה פיסטוק",
        price: 6,
        img: "./images/ice cream/Pistachio ice cream scoop.jpeg",
        category: "ice cream",
        filter: "1",
    },
    {
        name: "כדור גלידה פטל",
        price: 6,
        img: "./images/ice cream/Raspberry ice cream scoop.jpeg",
        category: "ice cream",
        filter: "1",
    },
    {
        name: "כדור גלידה תות",
        price: 6,
        img: "./images/ice cream/Strawberry ice cream scoop.jpeg",
        category: "ice cream",
        filter: "1",
    },
    {
        name: "כדור גלידה מוקה",
        price: 6,
        img: "./images/ice cream/Mocha ice cream scoop.jpeg",
        category: "ice cream",
        filter: "1",
    },
    {
        name: "כדור גלידה שוקו",
        price: 6,
        img: "./images/ice cream/Chocolate ice cream scoop.jpeg",
        category: "ice cream",
        filter: "1",
    },

    // pastries & desserts
    {
        name: "וופל בלגי",
        price: 20,
        img: "./images/pastries & desserts/Belgian waffles.jpg",
        category: "pastry",
        filter: "2",
    },
    {
        name: "פנקייק",
        price: 8,
        img: "./images/pastries & desserts/Pancakes.jpg",
        category: "pastry",
        filter: "2",
    },
    {
        name: "צ'ורוס מתוק",
        price: 18,
        img: "./images/pastries & desserts/Sweet churros.jpg",
        category: "pastry",
        filter: "2",
    },
    {
        name: "קרואסון חמאה",
        price: 8,
        img: "./images/pastries & desserts/Butter croissant.jpeg",
        category: "pastry",
        filter: "1",
        des: "",
    },
    {
        name: "עוגיות שוקו צ'יפס",
        price: 12,
        img: "./images/pastries & desserts/Chocolate chip cookies.jpg",
        category: "pastry",
        filter: "2",
    },
    {
        name: "עוגת בראוניז",
        price: 12,
        img: "./images/pastries & desserts/Brawnie cake.jpg",
        category: "pastry",
        filter: "2",
    },
    {
        name: "עוגת שוקולד",
        price: 12,
        img: "./images/pastries & desserts/Chocolate cake.jpg",
        category: "pastry",
        filter: "2",
    },
    {
        name: "קאפקייק מוקה-אגוזי לוז",
        price: 10,
        img: "./images/pastries & desserts/Hazelnut moccha cupcake.jpg",
        category: "pastry",
        filter: "1",
    },
    {
        name: "קאפקייק שוקולד",
        price: 10,
        img: "./images/pastries & desserts/Chocolate cupcake.jpg",
        category: "pastry",
        filter: "2",
    },
    {
        name: "מיני פאי מנגו-וניל",
        price: 16,
        img: "./images/pastries & desserts/Mini vanilla-Mango pie.jpg",
        category: "pastry",
        filter: "2",
    },
    {
        name: "מקרון אוכמניות",
        price: 6,
        img: "./images/pastries & desserts/Blueberry macaroon.jpg",
        category: "pastry",
        filter: "2",
    },
    {
        name: "מקרון פיסטוק",
        price: 6,
        img: "./images/pastries & desserts/Pistachio macaroon.jpg",
        category: "pastry",
        filter: "2",
    },
    {
        name: "מקרון וניל עם שוקולד לבן",
        price: 8,
        img: "./images/pastries & desserts/Vanilla and white chocolate macaroon.jpg",
        category: "pastry",
        filter: "1",
    },
    {
        name: "מקרונים בננה-תות-אפרסק",
        price: 20,
        img: "./images/pastries & desserts/Banana-Strawberry-Peach macaroons.jpg",
        category: "pastry",
        filter: "2",
    },
    {
        name: "מקרונים וניל-קרמל-מוקה-שוקולד",
        price: 25,
        img: "./images/pastries & desserts/Vanilla-Caramel-Mocha-Chocolate macaroons.jpg",
        category: "pastry",
        filter: "1",
    },
    {
        name: "מקרונים פטל-וניל-אוכמניות",
        price: 20,
        img: "./images/pastries & desserts/Raspberry-Vanilla-Bluberry macaroons.jpg",
        category: "pastry",
        filter: "2",
    },
    {
        name: "מקרונים שוקולד-תות-וניל",
        price: 20,
        img: "./images/pastries & desserts/Chocolate-Strawberry-Vanilla macaroons.jpg",
        category: "pastry",
        filter: "2",
    },
    {
        name: "דונאט שוקולד",
        price: 8,
        img: "./images/pastries & desserts/Chocolate donuts.jpg",
        category: "pastry",
        filter: "1",
    },
    {
        name: "רביעיית דונטס צבעוניים",
        price: 25,
        img: "./images/pastries & desserts/4 colorful donuts.jpg",
        category: "pastry",
        filter: "1",
    },
    {
        name: "שישיית דונאטס צבעוניים",
        price: 40,
        img: "./images/pastries & desserts/6 colorful donuts.jpg",
        category: "pastry",
        filter: "2",
    },
    {
        name: "דונאט יוניקורן",
        price: 10,
        img: "./images/pastries & desserts/Unicorn donuts.jpg",
        category: "pastry",
        filter: "1",
    }
    , {
        name: "קינוח שוקולד-וניל-אוכמניות",
        price: 14,
        img: "./images/pastries & desserts/Chocolate-Vanilla-Raspberry dessert.jpg",
        category: "pastry",
        filter: "2",
    },
    {
        name: "קינוח מנגו-קרם",
        price: 14,
        img: "./images/pastries & desserts/Mango-Cream dessert.jpg",
        category: "pastry",
        filter: "1",
    },
    {
        name: "קינוח אוכמניות",
        price: 16,
        img: "./images/pastries & desserts/Bluberry dessert.jpg",
        category: "pastry",
        filter: "2",
    },
    {
        name: "קינוח שוקולד לבן ופיסטוק",
        price: 16,
        img: "./images/pastries & desserts/White chocolate pistachio dessert.jpg",
        category: "pastry",
        filter: "1",
    },
    {
        name: "קינוח תותים-קרם",
        price: 20,
        img: "./images/pastries & desserts/Strawberry-Cream dessert.jpg",
        category: "pastry",
        filter: "1",
    },
    // cakes
    {
        name: "עוגת קצפת וניל",
        price: 150,
        img: "./images/cakes/Vanilla whipped cream cake.jpg",
        category: "cake",
        filter: "2",
    },
    {
        name: "עוגת קצפת קרמל",
        price: 180,
        img: "./images/cakes/Cream-Caramel cake.jpeg",
        category: "cake",
        filter: "1",
    },
    {
        name: "עוגת שכבות וניל קקאו",
        price: 160,
        img: "./images/cakes/Vanilla cocoa layer cake.jpg",
        category: "cake",
        filter: "1",
    },
    {
        name: "רולדת קרם-תותים",
        price: 120,
        img: "./images/cakes/Strawberry-Cream roll.jpeg",
        category: "cake",
        filter: "2",
    },
    {
        name: "עוגת קצפת תותים",
        price: 180,
        img: "./images/cakes/Strawberry whipped cream cake.jpg",
        category: "cake",
        filter: "1",
    },
    {
        name: "רולדת קרם-לוטוס",
        price: 120,
        img: "./images/cakes/Lotus-Cream roll.jpeg",
        category: "cake",
        filter: "2",
    },
    {
        name: "עוגת גבינה לוטוס ואגוזי לוז",
        price: 180,
        img: "./images/cakes/Lotus hazelnut cheesecake.jpeg",
        category: "cake",
        filter: "1",
    },
    {
        name: "עוגת גבינה לוטוס",
        price: 120,
        img: "./images/cakes/Lotus cheesecake.jpg",
        category: "cake",
        filter: "1",
    },
    {
        name: "עוגת גבינה תפוזים",
        price: 120,
        img: "./images/cakes/Orange cheesecake.jpg",
        category: "cake",
        filter: "1",
    },
    {
        name: "עוגת קצפת פירות יער",
        price: 180,
        img: "./images/cakes/Berry whipped cream cake.jpg",
        category: "cake",
        filter: "2",
    },
    {
        name: "טארט שוקולד מריר",
        price: 130,
        img: "./images/cakes/Dark chocolate tart.jpeg",
        category: "cake",
        filter: "2",
    },
    {
        name: "רולדת שוקולד",
        price: 120,
        img: "./images/cakes/Chocolate roll.jpeg",
        category: "cake",
        filter: "1",
    },
    {
        name: "עוגת שוקולד",
        price: 160,
        img: "./images/cakes/Chocolate cake.jpg",
        category: "cake",
        filter: "1",
    },
    {
        name: "עוגת כדורי שוקולד",
        price: 160,
        img: "./images/cakes/Chocolate ball cake.jpg",
        category: "cake",
        filter: "1",
    },
    {
        name: "עוגת דאבל מוס",
        price: 180,
        img: "./images/cakes/Chocolate ball cake and double mousse.jpeg",
        category: "cake",
        filter: "1",
    },
];


// תצוגת המוצרים
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

// פונקציה למחיקת איבר מהמערך
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
    let newName = prompt("הכנס שם לאיבר החדש:");
    let newPrice = prompt("הכנס מחיר לאיבר החדש:");
    let newImg = prompt("הכנס URL לתמונה של האיבר:");
    let newCategory = prompt("הכנס קטגוריה לאיבר החדש:");
    let newFilter = prompt("הכנס פילטר לאיבר החדש:");

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



