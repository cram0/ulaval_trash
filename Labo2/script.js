addEventListener("input", async (event) => {
	await searchbarUpdate(event);
});

const dropdown = document.getElementsByClassName("dropdown");
const dropdownList = document.getElementsByClassName("dropdown-list");

const searchbarUpdate = async (e) => {
	console.log(e.target.value);

	for (const item of dropdownList[0].children) {
		dropdownList[0].removeChild(item);
	}

	if (e.target.value == "") {
		dropdown[0].style.display = "none";
	} else {
		dropdown[0].style.display = "block";
	}
};

const foodList = [
	{
		name: "8 Sushi mix",
		price: "10€",
		img: "https://www.readersdigest.ca/wp-content/uploads/2011/11/japanese-sushi-rolls-scaled.jpg",
	},
	{
		name: "12 Sushi mix",
		price: "15€",
		img: "https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg",
	},
	{
		name: "4 person party mix",
		price: "37€",
		img: "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2015/12/30/Production/LocalLiving/Images/iStock_000008799300_Large.jpg?t=20170517",
	},
];
