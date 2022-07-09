 
//     
//     calculator.displayNumber = '0';
//   } else {
//     alert('Operator sudah ditetapkan');
//   }
// }

// function performCalculation() {
//   if (calculator.firstNumber == null || calculator.operator == null) {
//     alert('Anda belum menetapkan operator');
//     return;
//   }
  
//   let result = 0;
//   if (calculator.operator === '+') {

//     result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
//   } else {
//     result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
//   }
  
//   calculator.displayNumber = result;
//   const buttons = document.querySelectorAll('.button');
//   for (const button of buttons) {
//     button.addEventListener('click', function(event) {
  
//       // mendapatkan objek elemen yang diklik
//       const target = event.target;
   
  
//       if (target.classList.contains('clear')) {
//         clearCalculator();
//         updateDisplay();
//         return;
//       }
//       if (target.classList.contains('clear')) {
//         clearCalculator();
//         updateDisplay();
//         return;
//       }
     
//       if (target.classList.contains('negative')) {
//         inverseNumber();
//         updateDisplay();
//         return;
//       }
     
//       if (target.classList.contains('equals')) {
//         performCalculation();
//         updateDisplay();
//         return;
//       }
     
//       if (target.classList.contains('operator')) {
//         handleOperator(target.innerText);
//         return;
//       }
//       inputDigit(target.innerText);
//       updateDisplay();
//     });
//   }
// }



const calculator = {
displayNumber: '0',
operator: null,
firstNumber: null,
waitingForSecondNumber: false,
};

function updateDisplay() {
document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}

function clearCalculator() {
calculator.displayNumber = '0';
calculator.operator = null;
calculator.firstNumber = null;
calculator.waitingForSecondNumber = false;
}


//  /*kalkulator  menampilkan angka 0 di awal bilangan,Untuk memperbaikinya, pada fungsi inputDigit(), tambahkan sebuah kondisi dimana jika displayNumber bernilai ‘0’, maka angka yang pertama dimasukkan pengguna akan menggantikan keseluruhan nilai displayNumber selain itu, lakukan seperti biasanya. Untuk melakukannya kita gunakan if-else statement. */
function inputDigit(digit) {
if (calculator.displayNumber === '0') {
  calculator.displayNumber = digit;
} else {
  calculator.displayNumber += digit;
}
}

function inverseNumber() {
if (calculator.displayNumber === '0') {
  return;
}
calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
if (!calculator.waitingForSecondNumber) {
  calculator.operator = operator;
  calculator.waitingForSecondNumber = true;
  calculator.firstNumber = calculator.displayNumber;
  calculator.displayNumber = '0';
} else {
  alert('Operator sudah ditetapkan');
}
}

function performCalculation() {
if (calculator.firstNumber == null || calculator.operator == null) {
  alert('Anda belum menetapkan operator');
  return;
}

let result = 0;
if (calculator.operator === '+') {
      //parseInt untuk merubah string menjadi number
  result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
} else {
  result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
}



   // objek yang akan dikirimkan sebagai argumen fungsi putHistory()
   const history = {
    firstNumber: calculator.firstNumber,
    secondNumber: calculator.displayNumber,
    operator: calculator.operator,
    result: result
}
putHistory(history);


calculator.displayNumber = result;

renderHistory();
}


const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
button.addEventListener('click', function (event) {
  // mendapatkan objek elemen yang diklik
  const target = event.target;

  //jika target memiliki(contains) class bernama 'clear
  if (target.classList.contains('clear')) {
    //jalankan function
    clearCalculator();
    //lalu function
    updateDisplay();
      //return untuk keluat dari function
    return;
  }

  if (target.classList.contains('negative')) {
    inverseNumber();
    updateDisplay();
    return;
  }

  if (target.classList.contains('equals')) {
    performCalculation();
    updateDisplay();
    return;
  }

  if (target.classList.contains('operator')) {
    handleOperator(target.innerText)
    return;
  }

  inputDigit(target.innerText);
  updateDisplay();
});
}