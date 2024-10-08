const guestBtn = document.querySelector("#guests-input-btn"),
	guestOptions = document.querySelector("#guests-input-options"),
	adultsSubsBtn = document.querySelector("#adults-subs-btn"),
	adultsAddBtn = document.querySelector("#adults-add-btn"),
	roomSubsBtn = document.querySelector("#room-subs-btn"),
	roomAddBtn = document.querySelector("#room-add-btn"),
	childSubsBtn = document.querySelector("#child-subs-btn"),
	childAddBtn = document.querySelector("#child-add-btn"),
	adultsCountEl = document.querySelector("#guests-count-adults"),
	roomCountEl = document.querySelector("#guests-count-room");
	childCountEl = document.querySelector("#guests-count-child");
let maxNumGuests = 15,
	isGuestInputOpen = false,
	adultsCount = 3,
	roomCount = 1,
	childCount = 1;
updateValues();

guestBtn.addEventListener('click', function (e) {
	if (isGuestInputOpen) {
		guestBtn.classList.remove("open");
		guestOptions.classList.remove("open");
	} else {
		guestBtn.classList.add("open");
		guestOptions.classList.add("open");
	}
	isGuestInputOpen = isGuestInputOpen ? false : true;
	e.preventDefault();
});
adultsAddBtn.addEventListener('click', function () {
	adultsCount = addValues(adultsCount);
	updateValues();
});
adultsSubsBtn.addEventListener('click', function () {
	adultsCount = substractValues(adultsCount, 1);
	updateValues();
});
roomAddBtn.addEventListener('click', function () {
	roomCount = addValues(roomCount);
	updateValues();
});
roomSubsBtn.addEventListener('click', function () {
	roomCount = substractValues(roomCount, 0);
	updateValues();
});
childAddBtn.addEventListener('click', function () {
	childCount = addValues(childCount);
	updateValues();
});
childSubsBtn.addEventListener('click', function () {
	childCount = substractValues(childCount, 0);
	updateValues();
});

function calcTotalGuests() {
	return adultsCount + roomCount + childCount;
}

function addValues(count) {
	return (calcTotalGuests() < maxNumGuests) ? count + 1 : count;
}

function substractValues(count, min) {
	return (count > min) ? count - 1 : count;
}

function updateValues() {
	let btnText = `${roomCount} room`;
	btnText += (adultsCount > 0) ? `, ${adultsCount} adults` + `, ${childCount} child` : '';

	guestBtn.innerHTML = btnText;
	roomCountEl.innerHTML = roomCount;
	adultsCountEl.innerHTML = adultsCount;
	childCountEl.innerHTML = childCount;
	if (adultsCount == 1) {
		adultsSubsBtn.classList.add("disabled");
	} else {
		adultsSubsBtn.classList.remove("disabled");
	} if (roomCount == 0) {
		roomSubsBtn.classList.add("disabled");
	} else {
		roomSubsBtn.classList.remove("disabled");
	}if (childCount == 0) {
		childSubsBtn.classList.add("disabled");
	} else {
		childSubsBtn.classList.remove("disabled");
	} if (calcTotalGuests() == maxNumGuests) {
		adultsAddBtn.classList.add("disabled");
		roomAddBtn.classList.add("disabled");
		childAddBtn.classList.add("disabled");
	} else {
		adultsAddBtn.classList.remove("disabled");
		roomAddBtn.classList.remove("disabled");
		childAddBtn.classList.remove("disabled");
	}
}