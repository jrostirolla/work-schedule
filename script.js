let timeDisplay = document.getElementById("currentDay");
let currentHour = parseInt(moment().format("H"));
//console.log(currentHour);

//text-block selectors
let blockColorSix = document.getElementById("six-text");
let blockColorSeven = document.getElementById("seven-text");
let blockColorEight = document.getElementById("eight-text");
let blockColorNine = document.getElementById("nine-text");
let blockColorTen = document.getElementById("ten-text");
let blockColorEleven = document.getElementById("eleven-text");
let blockColorTwelve = document.getElementById("twelve-text");
let blockColorThirteen = document.getElementById("thirteen-text");
let blockColorFourteen = document.getElementById("fourteen-text");
let blockColorFifteen = document.getElementById("fifteen-text");
let blockColorSixteen = document.getElementById("sixteen-text");
let blockColorSeventeen = document.getElementById("seventeen-text");
let blockColorEighteen = document.getElementById("eighteen-text");
let blockColorNineteen = document.getElementById("nineteen-text");
let blockColorTwenty = document.getElementById("twenty-text");

//Date and Time set
function timeUpdater() {
let currentTime = moment().format("DD - MM - YYYY { h:mm a }")
timeDisplay.textContent = currentTime;
}

setInterval(timeUpdater, 1000);


//colour changer:
function colorChanger() {
//6am
if (currentHour >= 6) {
    console.log("initialise colour changer - 6am")
    if (currentHour === 6) {
        blockColorSix.className = "timePresent card";
        console.log("Present hour identified - parameter set: timePresent")
    } else {
        blockColorSix.className = "timePast card"
        console.log("Previous hour detected - parameter set: timePast")
    }
}

//7am
if (currentHour >= 7) {
    console.log("initialise colour changer - 7am")
    if (currentHour === 7) {
        blockColorSeven.className = "timePresent card";
        console.log("Present hour identified - parameter set: timePresent");
    } else {
        blockColorSeven.className = "timePast card";
        console.log("Previous hour detected - parameter set: timePast");
    }
}

//8am
if (currentHour >= 8) {
    console.log("initialise colour changer - 8am")
    if (currentHour === 8) {
        blockColorEight.className = "timePresent card";
        console.log("Present hour identified - parameter set: timePresent");
    } else {
        blockColorEight.className = "timePast card";
        console.log("Previous hour detected - parameter set: timePast");
    }
}

//9am
if (currentHour >= 9) {
    console.log("initialise colour changer - 9am")
    if (currentHour === 9) {
        blockColorNine.className = "timePresent card";
        console.log("Present hour identified - parameter set: timePresent");
    } else {
        blockColorNine.className = "timePast card";
        console.log("Previous hour detected - parameter set: timePast");
    }
}

//10am
if (currentHour >= 10) {
    console.log("initialise colour changer - 10am")
    if (currentHour === 10) {
        blockColorTen.className = "timePresent card";
        console.log("Present hour identified - parameter set: timePresent");
    } else {
        blockColorTen.className = "timePast card";
        console.log("Previous hour detected - parameter set: timePast");
    }
}

//11am
if (currentHour >= 11) {
    console.log("initialise colour changer - 11am")
    if (currentHour === 11) {
        blockColorEleven.className = "timePresent card";
        console.log("Present hour identified - parameter set: timePresent");
    } else {
        blockColorEleven.className = "timePast card";
        console.log("Previous hour detected - parameter set: timePast");
    }
}

//12am
if (currentHour >= 12) {
    console.log("initialise colour changer - 12am")
    if (currentHour === 12) {
        blockColorTwelve.className = "timePresent card";
        console.log("Present hour identified - parameter set: timePresent");
    } else {
        blockColorTwelve.className = "timePast card";
        console.log("Previous hour detected - parameter set: timePast");
    }
}

//1pm
if (currentHour >= 13) {
    console.log("initialise colour changer - 1pm")
    if (currentHour === 13) {
        blockColorThirteen.className = "timePresent card";
        console.log("Present hour identified - parameter set: timePresent");
    } else {
        blockColorThirteen.className = "timePast card";
        console.log("Previous hour detected - parameter set: timePast");
    }
}

//2pm
if (currentHour >= 14) {
    console.log("initialise colour changer - 2pm")
    if (currentHour === 14) {
        blockColorFourteen.className = "timePresent card";
        console.log("Present hour identified - parameter set: timePresent");
    } else {
        blockColorFourteen.className = "timePast card";
        console.log("Previous hour detected - parameter set: timePast");
    }
}

//3pm
if (currentHour >= 15) {
    console.log("initialise colour changer - 3pm")
    if (currentHour === 15) {
        blockColorFifteen.className = "timePresent card";
        console.log("Present hour identified - parameter set: timePresent");
    } else {
        blockColorFifteen.className = "timePast card";
        console.log("Previous hour detected - parameter set: timePast");
    }
}

//4pm
if (currentHour >= 16) {
    console.log("initialise colour changer - 4pm")
    if (currentHour === 16) {
        blockColorSixteen.className = "timePresent card";
        console.log("Present hour identified - parameter set: timePresent");
    } else {
        blockColorSixteen.className = "timePast card";
        console.log("Previous hour detected - parameter set: timePast");
    }
}

//5pm
if (currentHour >= 17) {
    console.log("initialise colour changer - 5pm")
    if (currentHour === 17) {
        blockColorSeventeen.className = "timePresent card";
        console.log("Present hour identified - parameter set: timePresent");
    } else {
        blockColorSeventeen.className = "timePast card";
        console.log("Previous hour detected - parameter set: timePast");
    }
}

//6pm
if (currentHour >= 18) {
    console.log("initialise colour changer - 6pm")
    if (currentHour === 18) {
        blockColorEighteen.className = "timePresent card";
        console.log("Present hour identified - parameter set: timePresent");
    } else {
        blockColorEighteen.className = "timePast card";
        console.log("Previous hour detected - parameter set: timePast");
    }
}

//7pm
if (currentHour >= 19) {
    console.log("initialise colour changer - 7pm")
    if (currentHour === 19) {
        blockColorNineteen.className = "timePresent card";
        console.log("Present hour identified - parameter set: timePresent");
    } else {
        blockColorNineteen.className = "timePast card";
        console.log("Previous hour detected - parameter set: timePast");
    }
}

//8pm
if (currentHour >= 20) {
    console.log("initialise colour changer - 8pm")
    if (currentHour === 20) {
        blockColorTwenty.className = "timePresent card";
        console.log("Present hour identified - parameter set: timePresent");
    } else {
        blockColorTwenty.className = "timePast card";
        console.log("Previous hour detected - parameter set: timePast");
    }
}

}
colorChanger()

//Save to local storage
//6am
function saveButtonSix() {
    let inputSix = document.getElementById("six-text").value;
    localStorage.setItem("inputSix", inputSix);
}

//7am
function saveButtonSeven() {
    let inputSeven = document.getElementById("seven-text").value;
    localStorage.setItem("inputSeven", inputSeven);
}

//8am
function saveButtonEight() {
    let inputEight = document.getElementById("eight-text").value;
    localStorage.setItem("inputEight", inputEight);
}

//9am
function saveButtonNine() {
    let inputNine = document.getElementById("nine-text").value;
    localStorage.setItem("inputNine", inputNine);
}

//10am
function saveButtonTen() {
    let inputTen = document.getElementById("ten-text").value;
    localStorage.setItem("inputTen", inputTen);
}

//11am
function saveButtonEleven() {
    let inputEleven = document.getElementById("eleven-text").value;
    localStorage.setItem("inputEleven", inputEleven);
}

//12am
function saveButtonTwelve() {
    let inputTwelve = document.getElementById("twelve-text").value;
    localStorage.setItem("inputTwelve", inputTwelve);
}

//1pm
function saveButtonThirteen() {
    let inputThirteen = document.getElementById("thirteen-text").value;
    localStorage.setItem("inputThirteen", inputThirteen);
}

//2pm
function saveButtonFourteen() {
    let inputFourteen = document.getElementById("fourteen-text").value;
    localStorage.setItem("inputFourteen", inputFourteen);
}

//3pm
function saveButtonFifteen() {
    let inputFifteen = document.getElementById("fifteen-text").value;
    localStorage.setItem("inputFifteen", inputFifteen);
}

//4pm
function saveButtonSixteen() {
    let inputSixteen = document.getElementById("sixteen-text").value;
    localStorage.setItem("inputSixteen", inputSixteen);
}

//5pm
function saveButtonSeventeen() {
    let inputSeventeen = document.getElementById("seventeen-text").value;
    localStorage.setItem("inputSeventeen", inputSeventeen);
}

//6pm
function saveButtonEighteen() {
    let inputEighteen = document.getElementById("eighteen-text").value;
    localStorage.setItem("inputEighteen", inputEighteen);
}

//7pm
function saveButtonNineteen() {
    let inputNineteen = document.getElementById("nineteen-text").value;
    localStorage.setItem("inputNineteen", inputNineteen);
}

//8pm
function saveButtonTwenty() {
    let inputTwenty = document.getElementById("twenty-text").value;
    localStorage.setItem("inputTwenty", inputTwenty);
}

//clear set items



//TODO: Input save button functionality
//TODO: Input localStorage render on reload (change input contents to localStorage?)