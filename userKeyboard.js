let userEnteredKeyPressed = document.addEventListener("keypress", function (event) {
    //console.log(event.key);
    let userPressedKey = event.key
    // console.log(userPressedKey.toUpperCase());
    let letter = userPressedKey.toUpperCase();

    displayUserInputInBoxes(letter)
});

function displayUserInputInBoxes(letter) {
    const rowDivs = document.querySelector("#row-" + `${attemptCounter}`).children;
    // console.log(rowDivs)
    
}