addEventListener("input", async (event) => {
    await searchbarUpdate(event);
});

const clearSearchBar = () => {
    const searchBar = document.getElementsByClassName("searchbar");
    const clearBtn = document.getElementsByClassName("clear-searchbar-btn");
    const dropdownList = document.getElementsByClassName("dropdown-list");
    const dropdown = document.getElementsByClassName("dropdown");

    clearBtn[0].style.visibility = "hidden";
    searchBar[0].value = "";
    dropdown[0].style.display = "none";
};

const searchbarUpdate = async (e) => {
    console.log(e.target.value);

    const dropdown = document.getElementsByClassName("dropdown");
    const dropdownList = document.getElementsByClassName("dropdown-list");
    const clearBtn = document.getElementsByClassName("clear-searchbar-btn");

    dropdownList[0].innerHTML = "";

    if (e.target.value == "") {
        dropdown[0].style.display = "none";
        clearBtn[0].style.visibility = "hidden";
    } else {
        clearBtn[0].style.visibility = "visible";
        for (const food of foodList) {
            if (food.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                const newFoodElement = document.createElement("li");
                const newFood = document.createElement("a");
                newFood.innerText = food.name;
                newFood.href = food.href;
                newFoodElement.appendChild(newFood);
                dropdownList[0].appendChild(newFoodElement);
            }
        }
        console.log(dropdownList[0].children.length);
        if (dropdownList[0].children.length == 0) {
            const noResultElem = document.createElement("li");
            noResultElem.innerText = "No result found";
            dropdownList[0].appendChild(noResultElem);
        }
        dropdown[0].style.display = "block";
    }
};

const foodList = [
    {
        name: "8 Sushi mix",
        price: "10€",
        img: "https://www.readersdigest.ca/wp-content/uploads/2011/11/japanese-sushi-rolls-scaled.jpg",
        href: "8mix.html"
    },
    {
        name: "12 Sushi mix",
        price: "15€",
        img: "https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg",
        href: "12mix.html"
    },
    {
        name: "4 Person party mix",
        price: "37€",
        img: "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2015/12/30/Production/LocalLiving/Images/iStock_000008799300_Large.jpg?t=20170517",
        href: "partymix.html"
    }
];
