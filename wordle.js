const wordOfTheDay = "happy"
let attemptCounter = 0;
function display() {
    attemptCounter  = attemptCounter + 1;
    const userinput = document.getElementById('input').value.toUpperCase();
    // console.log(userinput);
    //splitting each letter in the word
    const newArrayOfletters = userinput.split("");
    // console.log(newArrayOfletters);

    const parentDivs = document.querySelectorAll(".row");
    console.log(parentDivs);

    const row1Divs = document.querySelector("#row-1").children;
    //console.log(row1Divs);
         for (let index in row1Divs){
           let letter = newArrayOfletters[index];
        //    console.log(letter);
           let rowDiv = row1Divs[index]; 
        //    console.log(rowDiv) ;
           rowDiv.textContent = letter ;
         }
    

}
