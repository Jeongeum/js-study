function printHello() {
  console.log("Hello~!");
}

printHello();

function log(message) {
  console.log(message);
  return 0;
}

log("Hello@");

// 파라미터
function changeName(obj) {
  obj.name = "coder";
}

const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

//default parameters
function showMessage(msg, from = "unknown") {
  console.log(`${msg} by ${from}`);
}

showMessage("hi!");

// rest parameters (배열을 인자로 받을 때)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

// for (const arg of args) {
//     console.log(arg);
// }

// args.forEach((arg) => console.log(arg));

printAll("dream", "coding", "ellie"); // > dream coding ellie 순서대로 출력

//Local scope

let globalMessage = "global"; // global 변수
function printMessage() {
  let message = "hello"; // local 변수
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message); // 자식함수가 부모함수에 정의된 message 변수에 접근 가능한 것 -> 클로저
    let childMessage = "hello";
  }
}

printMessage();

// return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(result);

// 근데 만약 function 에 return이 없다면 알아서 return undefined가 된다.

// 추가) early return , early exit (조기 리턴, 조기 종료)
// function 안에서 가독성있게 코드를 작성하려면 조건에 안맞을 때 바로바로 return 되도록 하는것이 좋다.

//bad
function upgradeUser(user) {
  if (user.point > 10) {
    // ...
  } else {
    return;
  }
}

//good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  } else {
    // ...
  }
}

//first class function

// 1. function expression

// print(); > 선언 전 호출했기 때문에 에러발생.
const print = function () {
  // 변수에 함수 할당
  console.log("print!");
};
print(); // > print!

const print2 = print;
print2(); // > print!

function sum(a, b) {
  return a + b;
}
const sum2 = sum; //이미 선언한 함수를 변수에 다시 할당 가능
console.log(sum2(1, 2)); // > 3

// 2. 함수 표현식을 사용한 callback 함수

function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// 익명함수
const printYes = function () {
  console.log("yes!!");
};

// named function
const printNo = function print() {
  console.log("no~~");
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// 3. 화살표 함수
// - 항상 익명함수이다.
// - 함수를 간단하게 만든다.
// - 배열/리스트에 사용하기 좋다.

const simplePrint = () => console.log("simple~");

const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
  return a * b;
};

// 퀴즈!
console.log("---Quiz time!---");

function calculate(command, a, b) {
  let result = null;
  switch (command) {
    case "add":
      result = a + b;
      break;
    case "subtract":
      result = a - b;
      break;
    case "divide":
      result = a / b;
      break;
    case "multiply":
      result = a * b;
      break;
    case "remainder":
      result = a % b;
      break;
    default:
      throw Error("에러입니다!");
  }
  return result;
}

console.log(calculate("add", 10, 2));
console.log(calculate("subtract", 10, 2));
console.log(calculate("divide", 10, 2));
console.log(calculate("multiply", 10, 2));
console.log(calculate("remainder", 10, 2));

// 정해진 데이터를 처리하는 경우에는 switch문을 이용하는 것이 좋다!
