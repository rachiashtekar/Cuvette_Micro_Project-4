const userInput=document.querySelector(".user-input");
const keys=document.querySelectorAll(".key");
const resetkey=document.querySelector(".reset-key");
const answerkey=document.querySelector(".answer-key");
const deletekey=document.querySelector(".delete-key");

let lastkeyIsOperator=false;
let decimalAdded=false;

deletekey.addEventListener("click",function(){
    let initialValue=userInput.value;
    let updatedValue=initialValue.substring(0, initialValue.length-1)
    userInput.value=updatedValue;
})

answerkey.addEventListener("click",function(){
    const expression=userInput.value;
    const formattedExpression=expression.replace("x","*");
    const result=eval(formattedExpression)
    userInput.value=result;
})

resetkey.addEventListener("click",function(){
    console.log("reset")
    userInput.value=""
});

const keysArray=Array.from(keys);
keysArray.forEach((key)=>{
    key.addEventListener("click",(event)=>{
        console.log(event.target.innerText);
        const value=event.target.innerText;
        if(value==="," && decimalAdded){
            return;
        }
        if ("+-x/".includes(value)){
            if(lastkeyIsOperator){
                let initialValue=userInput.value;
                let updateValue=initialValue.substring(0,initialValue.length-1)+value
                userInput.value=updateValue;
                return;
            }
            lastkeyIsOperator=true;
            decimalAdded=false;
        }
        else{
            lastkeyIsOperator=false;
            if(value=='.'){
                decimalAdded=true
            }
        }
        userInput.value+=value

    })
})


// // Selecting the DOM element with the class "user-input" and storing it in the variable userInput
// const userInput = document.querySelector(".user-input");

// // Selecting all DOM elements with the class "key" and storing them in the variable keys
// const keys = document.querySelectorAll(".key");

// // Selecting the DOM element with the class "reset-key" and storing it in the variable resetkey
// const resetkey = document.querySelector(".reset-key");

// // Selecting the DOM element with the class "answer-key" and storing it in the variable answerkey
// const answerkey = document.querySelector(".answer-key");

// // Selecting the DOM element with the class "delete-key" and storing it in the variable deletekey
// const deletekey = document.querySelector(".delete-key");

// // Initializing two boolean variables to track the state of the last key pressed
// let lastkeyIsOperator = false; // Indicates whether the last key pressed was an operator (+, -, x, /)
// let decimalAdded = false; // Indicates whether a decimal point has been added to the user input

// // Adding a click event listener to the reset key
// resetkey.addEventListener("click", function () {
//     console.log("reset");
//     // Setting the value of the user input to an empty string
//     userInput.value = " ";
// });

// // Converting the NodeList of keys to an array
// const keysArray = Array.from(keys);

// // Iterating through each key in the keysArray and adding a click event listener
// keysArray.forEach((key) => {
//     key.addEventListener("click", (event) => {
//         // Logging the inner text of the clicked key to the console
//         console.log(event.target.innerText);
        
//         // Storing the inner text of the clicked key in the variable 'value'
//         const value = event.target.innerText;

//         // Handling special case for the comma key when a decimal has already been added
//         if (value === "," && decimalAdded) {
//             return;
//         }

//         // Checking if the clicked key is an operator (+, -, x, /)
//         if ("+-x/".includes(value)) {
//             // If the last key pressed was also an operator, replace it with the new one
//             if (lastkeyIsOperator) {
//                 let initialValue = userInput.value;
//                 let updateValue = initialValue.substring(0, initialValue.length - 1) + value;
//                 userInput.value = updateValue;
//                 return;
//             }
//             // Updating state variables for operator and decimal
//             lastkeyIsOperator = true;
//             decimalAdded = false;
//         } else {
//             // If the clicked key is not an operator
//             lastkeyIsOperator = false;
//             // Handling the case for the decimal point key
//             if (value === '.') {
//                 decimalAdded = true;
//             }
//         }
        
//         // Appending the clicked key's value to the user input
//         userInput.value += value;
//     });
// });



