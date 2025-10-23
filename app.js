console.log("HELLO BUFFALO PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM



let generatedNumber = randomNumber(1,100);





function randomNumber (min, max){


    min = Math.ceil(min); //rounds number up
    max = Math.floor(max); //rounds number down
    return Math.floor(Math.random() * (max - min + 1)) + min; //

}



const btn = document.querySelector("button"); //finds element
const input = document.querySelector("#input-name"); // finds id named input-name
const message = document.querySelector("#message"); //finds id named message
const list = document.querySelector('#list');//finds the id named list



btn.addEventListener("click", (event) =>{
    event.preventDefault();
    const userGuess = Number(input.value);
    
    const listNums = document.createElement('li');
    listNums.textContent = userGuess;

    if (userGuess === generatedNumber) {
        // console.log("correct!");
        message.textContent = `correct! number is ${generatedNumber}`;
        


    }
    else if (userGuess > generatedNumber) {
        // console.log("too high")
        message.textContent = `your number is ${userGuess} and it is too high`;
        document.getElementById('list').appendChild(listNums);
        
    }
    else if (userGuess < generatedNumber) {
        // console.log("too low")
        message.textContent = `your number is ${userGuess} and it is too low`;
        document.getElementById('list').appendChild(listNums);

    }
    else {
        // console.log("INVALID INPUT")
        message.textContent = `${userGuess} is invalid. try again`;
        document.getElementById('list').appendChild(listNums);

    }
});


