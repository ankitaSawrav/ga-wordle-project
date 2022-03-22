
const wordOfTheDay = "happy";
let attemptCounter = 1;
let letterCounter = 0;
const arrayOFWordOfTheDay = wordOfTheDay.toUpperCase();
console.log(arrayOFWordOfTheDay);
 // splitting each letter in the word
let keyButtons = document.getElementsByClassName('key');
for (const key of keyButtons) {
    // console.log(key);
    key.addEventListener("click", function () {
        console.log(key);
        const keyPressed = key.dataset['key'];
        //checking the row on pressing Enter Key
        if (keyPressed ==  "Enter"){
            console.log( "enter is pressed")
            console.log("attemptCounter"+attemptCounter);
            console.log("letterCounter"+letterCounter)
            if(letterCounter == 5){
                const row = document.querySelector("#row-" + `${attemptCounter}`);
                const selectedRowDivs = row.children;
                console.log(selectedRowDivs);
                
                for(let i = 0; i < selectedRowDivs.length; i++ ) {
                    console.log(selectedRowDivs[i].textContent)
                    if(arrayOFWordOfTheDay.includes(selectedRowDivs[i].textContent)) {
                        
                        if(arrayOFWordOfTheDay[i] == selectedRowDivs[i].textContent ){
                            selectedRowDivs[i].style.backgroundColor = "green";
                            selectedRowDivs[i].classList.add("matches")                    
                        }
                        else{
                            selectedRowDivs[i].style.backgroundColor = "orange";
                            selectedRowDivs[i].classList.add("presentbutnotinpositon")
                        }                       
                    }else{
                        selectedRowDivs[i].style.backgroundColor = "gray";
                        selectedRowDivs[i].classList.add("absent")
                    }
                    const allGuessLetterMatches = row.querySelectorAll(".matches");  
                    console.log(allGuessLetterMatches);  
                    
                    //to disable all the child nodes after the word is guessed.
                    if(allGuessLetterMatches.length==5){
                      alert("YOU WON");
                    }
                    tochangekeyboardColor();     
                     
                }  
            
            attemptCounter = attemptCounter + 1;
            letterCounter = 0;
            console.log("attemptCounter"+attemptCounter);
            console.log("letterCounter"+letterCounter);
            }else{
                alert("not Enough letters!!")    
            }
            
        }else{
            display(keyPressed, key);
        } 
             
    });
}


function display(keyPressed,key) {
    console.log("keyPressed:" + keyPressed)
    if (attemptCounter < 6 && letterCounter < 5) {
        //to put the word in 1st row in Attempt 1
        const rowDivs = document.querySelector("#row-" + `${attemptCounter}`).children;
        // console.log(rowDivs)
        // console.log(rowDivs[letterCounter]); 
        rowDivs[letterCounter].textContent = keyPressed ; 
        console.log("letterCounter: "+letterCounter);
        console.log("attemptCounter: "+attemptCounter);
        letterCounter = letterCounter + 1;
     }
}
function tochangekeyboardColor(){
    
    const divMatchesClasses = document.querySelectorAll(".matches");
    console.log(divMatchesClasses);
    for(let divMatchesClass of divMatchesClasses){     
        console.log(divMatchesClass);
        const valueT = divMatchesClass.textContent;
        console.log(valueT);
        const keys = document.getElementsByClassName("key");
        for(const key of keys){
            if(key.dataset["key"]==valueT){
                key.classList.add("matches");
            }
        }        
    }
}