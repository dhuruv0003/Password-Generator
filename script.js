




// const inputSlider = document.querySelector("[data-lengthSlider]");
// const lengthDisplay = document.querySelector("[data-lengthNumber]");

// const passwordDisplay = document.querySelector("[data-passwordDisplay]");
// const copyBtn = document.querySelector("[data-copy]");
// const copyMsg = document.querySelector("[data-copyMsg]");
// const uppercaseCheck = document.querySelector("#uppercase");
// const lowercaseCheck = document.querySelector("#lowercase");
// const numbersCheck = document.querySelector("#numbers");
// const symbolsCheck = document.querySelector("#symbols");
// const indicator = document.querySelector("[strength-indicator]");
// const generateBtn = document.querySelector(".generateButton");
// const allCheckBox = document.querySelectorAll("input[type=checkbox]");
// const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

// // Setting initial value for password and length of  and by default one box will be checked 

//     let password = "";
//     let passwordLength = 10;
//     let checkCount = 0;

// // calling handleslider at initial stage 

//     handleSlider();
//     setIndicator("#ccc");


// // function for setting length of password using handle slider 

//     function handleSlider() {
//         inputSlider.value = passwordLength;
//         // .value represent value of an attribute
//         lengthDisplay.innerText = passwordLength;
//         //or kuch bhi karna chahiye ? - HW
//         const min = inputSlider.min;
//         const max = inputSlider.max;
//         inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "% 100%"
//     }



//     function setIndicator(color) {
//         indicator.style.backgroundColor = color;
//         indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
//     }
// // set strength circle color initially to grey

// // Main function for generating all the random nnumbers 

//     function getRndInteger(min, max) {
//         return Math.floor(Math.random() * (max - min)) + min;
//     }

//  // to generate numbers from 0-9 

//     function generateRandomNumber() {
//         // to generate numbers 
//         return getRndInteger(0,9);
//     }


// // to generate alphabet from an ascii code use
// // String.fromCharCode();

//     function generateLowerCase() {  
//         return String.fromCharCode(getRndInteger(97,123))
//     }

// // generate upperCase 

//     function generateUpperCase() {  
//         return String.fromCharCode(getRndInteger(65,91))
//     }

// // generate a symbol 

//     function generateSymbol() {
//         const randNum = getRndInteger(0, symbols.length);
//         return symbols.charAt(randNum);
//     }

// // To find the strength of the password 

//     function calcStrength() {
//         let hasUpper = false;
//         let hasLower = false;
//         let hasNum = false;
//         let hasSym = false;
//         if (uppercaseCheck.checked) hasUpper = true;
//         if (lowercaseCheck.checked) hasLower = true;
//         if (numbersCheck.checked) hasNum = true;
//         if (symbolsCheck.checked) hasSym = true;
  
// // agar upper and lower hai and num or symbol se koi ek hai and pass >=8 hai to color green     // else if upper or lower and number or symbol and passwordlength>=8 then color orange 
//         // else color red 


//         if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
//         setIndicator("#0f0");
//         } else if (
//         (hasLower || hasUpper) &&
//         (hasNum || hasSym) &&
//         passwordLength >= 6
//         ) {
//         setIndicator("#ff0");
//         } else {
//         setIndicator("#f00");
//         }
//     }


// // to copy somethong to the clipboard the we use
// // navigator.clipboard.writeText(value)


//     async function copyContent() {
//         try {
//             //copy the value of text in display to clipboard
//             await navigator.clipboard.writeText(passwordDisplay.value);
//             copyMsg.innerText = "copied";
//         }
//         catch(e) {
//             copyMsg.innerText = "Failed";
//         }
//         // now copied message disappears after 2 sec, and to do that we need to change the visibility settings 
//         //to make copy wala span visible
//         copyMsg.classList.add("active");

//         setTimeout( () => {
//             copyMsg.classList.remove("active");
//         },2000);

//     }

//     function shufflePassword(array) {
//         //Fisher Yates Method
//         for (let i = array.length - 1; i > 0; i--) {
//             //random J, find out using random function
//             const j = Math.floor(Math.random() * (i + 1));
//             //swap number at i index and j index
//             const temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         }
//         let str = "";
//         array.forEach((el) => {str += el});
//         return str;
//     }

// //use handle checkbox change function if we check or uncheck any checkbox, thenk to count how many boxes are checked we use handlecheackbox function.

//     function handleCheckBoxChange() {
//         checkCount = 0;
//         allCheckBox.forEach( (checkbox) => {
//             if(checkbox.checked)
//                 checkCount++;
//         });

//         //special condition
//         if(passwordLength < checkCount ) {
//             passwordLength = checkCount;
//             handleSlider();
//         }
//     }

//     allCheckBox.forEach( (checkbox) => {
//         checkbox.addEventListener('change', handleCheckBoxChange);
//     })

// //to change the value of text along with the movement of the slider

//     inputSlider.addEventListener('input', (e) => {
//         // jis vlue par slider hoga woh e me store ho jayegi
//             //e ki target value ko password lenght me store kardo 
//         passwordLength = e.target.value;
//         handleSlider();
//     })


//     copyBtn.addEventListener('click', () => {
//         //i.e agar password exist karta hai to copy content call kardo

//         if(passwordDisplay.value)
//             copyContent();
//     })

//     generateBtn.addEventListener('click', () => {
//         //none of the checkbox are selected i.e // if none of the boxes are checked then return

//         if(checkCount == 0) 
//             return;

//         if(passwordLength < checkCount) {
//             passwordLength = checkCount;
//             handleSlider();
//         }

//         // let's start the jouney to find new password
    
//         //remove old password
//         password = "";

//         //let's put the stuff mentioned by checkboxes

//         // if(uppercaseCheck.checked) {
//         //     password += generateUpperCase();
//         // }

//         // if(lowercaseCheck.checked) {
//         //     password += generateLowerCase();
//         // }

//         // if(numbersCheck.checked) {
//         //     password += generateRandomNumber();
//         // }

//         // if(symbolsCheck.checked) {
//         //     password += generateSymbol();
//         // }


//         // Add all the chechbox function in an Array fetch them later 

//         let funcArr = [];

//         if(uppercaseCheck.checked)
//             funcArr.push(generateUpperCase);

//         if(lowercaseCheck.checked)
//             funcArr.push(generateLowerCase);

//         if(numbersCheck.checked)
//             funcArr.push(generateRandomNumber);

//         if(symbolsCheck.checked)
//             funcArr.push(generateSymbol);

//         //compulsory addition
//         // Now to add cumpolsary elements in the Array, i.e the elements that have checkboxes checked

//         for(let i=0; i<funcArr.length; i++) {
//             password += funcArr[i]();
//         }
       

//         //remaining adddition

//         for(let i=0; i<passwordLength-funcArr.length; i++) {
//             let randIndex = getRndInteger(0 , funcArr.length);
        
//             password += funcArr[randIndex]();
//         }
    
//         //shuffle the password

//         password = shufflePassword(Array.from(password));
    
//         //show in UI
        
//         passwordDisplay.value = password;
    
//         //calculate strength

//         calcStrength();
//     });

const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


//initially
let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
//ste strength circle color to grey
setIndicator("#ccc");


//set passwordLength
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    //or kuch bhi karna chahiye ? - HW
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "% 100%"
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRndInteger(0,9);
}

function generateLowerCase() {  
       return String.fromCharCode(getRndInteger(97,123))
}

function generateUpperCase() {  
    return String.fromCharCode(getRndInteger(65,91))
}

function generateSymbol() {
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e) {
        copyMsg.innerText = "Failed";
    }
    //to make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout( () => {
        copyMsg.classList.remove("active");
    },2000);

}

function shufflePassword(array) {
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        //random J, find out using random function
        const j = Math.floor(Math.random() * (i + 1));
        //swap number at i index and j index
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach( (checkbox) => {
        if(checkbox.checked)
            checkCount++;
    });

    //special condition
    if(passwordLength < checkCount ) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach( (checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})


inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})


copyBtn.addEventListener('click', () => {
    if(passwordDisplay.value)
        copyContent();
})

generateBtn.addEventListener('click', () => {
    //none of the checkbox are selected

    if(checkCount == 0) 
        return;

    if(passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // let's start the jouney to find new password
    console.log("Starting the Journey");
    //remove old password
    password = "";

    //let's put the stuff mentioned by checkboxes

    // if(uppercaseCheck.checked) {
    //     password += generateUpperCase();
    // }

    // if(lowercaseCheck.checked) {
    //     password += generateLowerCase();
    // }

    // if(numbersCheck.checked) {
    //     password += generateRandomNumber();
    // }

    // if(symbolsCheck.checked) {
    //     password += generateSymbol();
    // }

    let funcArr = [];

    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);

    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);

    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked)
        funcArr.push(generateSymbol);

    //compulsory addition
    for(let i=0; i<funcArr.length; i++) {
        password += funcArr[i]();
    }
    console.log("COmpulsory adddition done");

    //remaining adddition
    for(let i=0; i<passwordLength-funcArr.length; i++) {
        let randIndex = getRndInteger(0 , funcArr.length);
        console.log("randIndex" + randIndex);
        password += funcArr[randIndex]();
    }
    console.log("Remaining adddition done");
    //shuffle the password
    password = shufflePassword(Array.from(password));
    console.log("Shuffling done");
    //show in UI
    passwordDisplay.value = password;
    console.log("UI adddition done");
    //calculate strength
    calcStrength();
});