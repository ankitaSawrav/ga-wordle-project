const wordOfTheDay = "hoppy"
// const arrayOFWordOfTheDay = wordOfTheDay.toUpperCase();
// console.log(arrayOFWordOfTheDay);
// ************logic using inputBOX.
let attemptCounter = 0;

function display(keyPressed) {
    console.log("keyPressed:" + keyPressed)
    attemptCounter = attemptCounter + 1;
    const userinput = document.getElementById('input').value.toUpperCase();
    // splitting each letter in the word
    const newArrayOfletters = userinput.split("");
    console.log(newArrayOfletters);
    if (attemptCounter < 6) {
        //to put the word in 1st row in Attempt 1
        const rowDivs = document.querySelector("#row-" + `${attemptCounter}`).children;
        console.log(rowDivs);
        for (let i = 0; i < rowDivs.length; i++) {
            rowDivs[i].textContent = newArrayOfletters[i];
            if (arrayOFWordOfTheDay.includes(newArrayOfletters[i])) {
                if (arrayOFWordOfTheDay[i] == newArrayOfletters[i]) {
                    rowDivs[i].style.backgroundColor = "green";
                } else {
                    console.log("letter  in word");
                    rowDivs[i].style.backgroundColor = "orange";
                }
            } else {
                rowDivs[i].style.backgroundColor = "gray";
            }
        }
    } else {
        alert(" Your no of tries has been exhausted")
    }
}
//Examples:   
// The green mean letter the correct spot.


// The letter I is in the word but in the wrong spot.


// The letter U is not in the word in any spot.