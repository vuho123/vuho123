// let userName=document.getElementById("username")
// let password=document.getElementById("password")
// console.log(userName)
let info = [
  {
    username: "User1",
    password: "123456",
  },
  {
    username: "User2",
    password: "123456",
  },
];
function findAccount() {
  for (let i = 0; i < info.length; i++) {
    let account = info[i];
    if (
      account.username == document.getElementById("username").value &&
      account.password == document.getElementById("password").value
    ) {
      window.location.href = "newPage.html";
    }
    else {
      document.getElementById("text5").innerHTML="Please Try Again!!"
    }
  }
}
function getNumber() {
  let correctNumber = Math.floor(Math.random() * 10) + 1;

  let number = document.getElementById("placeHolder").value;
  console.log(number);

  if (number < 1 || number > 10) {
    document.getElementById("text3").innerHTML=`PLEASE FILL OUT NUMBER FROM 1 TO 10`
  } else if (1 <= number <= 10 && number == correctNumber) {
    document.getElementById("text3").innerHTML = "YOU ARE CORRECT!!!!";
  } else if (1 <= number <= 10 && number != correctNumber) {
    document.getElementById(
      "text3"
    ).innerHTML = `WRONG! Correct Number is ${correctNumber}`;
  }
}

function myFunction() {
  document.getElementById("myBtn").disabled = true;
}
console.log(document.getElementById("myBtn"));

document.getElementById("myBtn").addEventListener("click", countClicks);

let Count = 1;
function countClicks() {
  let limit = 3;

  if (Count >= limit) {
    
      document.getElementById("text1").innerHTML="END GAME!!!"
    myFunction();
  } else {
    Count++;
  }
}
