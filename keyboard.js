//  const wordOfTheDay = "QUOLL";

// select random word fron "Valid words Array"

const randomNumber = Math.floor(Math.random() * validWords.length);
// console.log(validWords[randomNumber]);
wordOfTheDay = validWords[randomNumber];

let attemptCounter = 1;
let letterCounter = 0;
const arrayOFWordOfTheDay = wordOfTheDay.toUpperCase();
console.log(arrayOFWordOfTheDay);
// splitting each letter in the word
let keyButtons = document.getElementsByClassName('key');
for (const key of keyButtons) {
    key.addEventListener("click", function () {
        const keyPressed = key.dataset['key'];
        //checking the row on pressing Enter Key
        if (keyPressed == "Enter") {
            enterLetter(key);
        } else if (keyPressed == "del") {
            deleteLetter(key);
        } else {
            display(keyPressed, key);
        }
    });
}


function display(keyPressed, key) {
    // console.log("keyPressed:" + keyPressed)
    if (attemptCounter < 6 && letterCounter < 5) {
        //to put the word in 1st row in Attempt 1
        const rowDivs = document.querySelector("#row-" + `${attemptCounter}`).children;
        rowDivs[letterCounter].textContent = keyPressed;
        // console.log("letterCounter: " + letterCounter);
        // console.log("attemptCounter: " + attemptCounter);
        letterCounter = letterCounter + 1;
    }
}

function enterLetter(key) {
    // console.log("enter is pressed")
    // console.log("attemptCounter" + attemptCounter);
    // console.log("letterCounter" + letterCounter)
    //check for a valid word ................
    const selectedRow = document.querySelector("#row-" + `${attemptCounter}`);
    // console.log(selectedRow)
    const currentRowDivChildren = selectedRow.children
    let inputwordArray = [];
    for (let i = 0; i < currentRowDivChildren.length; i++) {
        let letter = currentRowDivChildren[i].textContent;

        inputwordArray.push(letter)
    }
    const inputWord = inputwordArray.join("");
    // console.log(inputWord);
    if (validWords.includes(inputWord)) {
        if (letterCounter == 5) {
            const row = document.querySelector("#row-" + `${attemptCounter}`);
            const selectedRowDivs = row.children;

            for (let i = 0; i < selectedRowDivs.length; i++) {
                if (arrayOFWordOfTheDay.includes(selectedRowDivs[i].textContent)) {

                    if (arrayOFWordOfTheDay[i] == selectedRowDivs[i].textContent) {
                        // selectedRowDivs[i].style.backgroundColor = "green";
                        selectedRowDivs[i].classList.add("matches")
                        // console.log(selectedRowDivs[i].textContent)
                        tochangekeyboardColor(selectedRowDivs[i].textContent, "matches");

                    } else {
                        selectedRowDivs[i].style.backgroundColor = "orange";
                        selectedRowDivs[i].classList.add("presentbutnotinpositon")
                        tochangekeyboardColor(selectedRowDivs[i].textContent, "presentbutnotinpositon");
                    }
                } else {
                    selectedRowDivs[i].style.backgroundColor = "gray";
                    selectedRowDivs[i].classList.add("absent");
                    tochangekeyboardColor(selectedRowDivs[i].textContent, "absent");
                }
            }            
            const allGuessLetterMatches = row.querySelectorAll(".matches");
            // console.log(allGuessLetterMatches);

            if (allGuessLetterMatches.length == 5) {
                // alert("YOU WON");
                disableAllKeyButtons();
                document.getElementById("message").textContent = "Congrats you won!!";
                createRefreshButton();

            }
            if (attemptCounter == 5 && allGuessLetterMatches.length != 5) {
                document.getElementById("message").textContent = " You Lose !!"
                createRefreshButton();
                disableAllKeyButtons();
            }
            attemptCounter = attemptCounter + 1;
            letterCounter = 0;
            // console.log("attemptCounter " + attemptCounter);
            // console.log("letterCounter " + letterCounter);
        } else {
            alert("not Enough letters!!")
        }
    } else {
        alert("not a valid word");
    }
}

function deleteLetter(key) {
    // console.log(letterCounter);
    if (letterCounter != 0) {
        const gettingTheLetterBoxToDeleteLetter = document.querySelector("#row-" + `${attemptCounter}`).children[letterCounter - 1];
        // console.log(gettingTheLetterBoxToDeleteLetter);
        gettingTheLetterBoxToDeleteLetter.textContent = "";
        letterCounter = letterCounter - 1;
    } else {
        // console.log("no letter to delete")
    }
}
// adding class match to the selected key and 
function tochangekeyboardColor(keyLetter, value) {
    // console.log("hello")
    // console.log(keyLetter);
    const keys = document.getElementsByClassName("key");
    for (const key of keys) {
        if (key.dataset["key"] == keyLetter) {
            if(!key.classList.contains("matches")){
                key.removeAttribute("class");
                key.classList.add("key");
                key.classList.add(value);              
            }            
        }
    }
}

function disableAllKeyButtons() {
    const keyElements = document.getElementsByClassName("key");
    for (const keyElement of keyElements) {
        keyElement.disabled = true;
    }
}

function createRefreshButton() {
    // console.log("hi")
    const messageDivContainer = document.getElementById("modal");
    // console.log(messageDivContainer);
    const refreshButton = document.createElement("button")
    refreshButton.classList.add("refesh")
    refreshButton.textContent = "Play another game"
    // document.body.appendChild(button);
    messageDivContainer.appendChild(refreshButton);
    refreshButton.addEventListener("click", function () {
        location.reload();
    })
}